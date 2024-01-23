"use client"
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { sortProducts } from "@/redux/features/productSlice";
import { useDispatch } from "react-redux";
import ProductCardSkeleton from "./ProductCardSkeleton";
import Pagination from "./Pagination";

const DisplayProducts = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(Array<any>);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const handleSort = () => {
    dispatch(sortProducts());
  };

  const allProducts = useAppSelector((state) => state.productReducer.value);
  const pL = allProducts.length;
  const pages = pL / 9 > 1 ? Math.round(pL / 9) + (pL % 9 ? 1 : 0) : 1;

  
  useEffect(() => {
    setProducts(() =>
      allProducts.slice((currentPage - 1) * 9, currentPage * 9),
    );
    setLoading(false)
  }, [allProducts, currentPage]);


  return (
    <div className="flex-1 space-y-4">
      <div className="display-cards">
        {products.length > 0 &&
          products.map((p, i) => <ProductCard key={p._id} product={p} />)}
        {products.length == 0 && !loading ? (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold">Products Not Found</h3>
          </div>
        ) : (
          loading &&
          [...Array(3)].map((v, i) => <ProductCardSkeleton key={i} />)
        )}
      </div>
      {allProducts.length > 0 && (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default DisplayProducts;