"use client";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { fetchProducts, sortProducts } from "@/redux/features/productSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(Array<any>);
  
  const dispatch = useDispatch<AppDispatch>()
  
  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/getAllProducts");
      const res = await result.json();
      if (res.success) {
        setProducts(res.products);
        dispatch(fetchProducts(res.products))
      }
      return res.products
    } catch (error) {
      console.log(error);
    }
  };
  
  const allProducts = useAppSelector((state) => state.productReducer.value)
  const pL = allProducts.length;
  const pages = pL / 9 > 1 ? Math.round(pL / 9) + (pL % 9 ? 1 : 0) : 1;

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleSort = () => {
    dispatch(sortProducts())
  };

  useEffect(() => {
    setProducts(() =>
      allProducts.slice((currentPage - 1) * 9, currentPage * 9),
    );
  }, [allProducts, currentPage, setCurrentPage]);

  return (
    <main className="container1">
      <div className="container2">
        <h2 className="text-4xl">Catalog</h2>
        <hr className="my-1 h-[2px] w-3/5 bg-slate-900" />
        <div className="flex items-center justify-end gap-4">
          <button className="hove flex  items-center gap-2 rounded-lg border border-pink-500 bg-pink-500 px-2 py-1 text-white hover:bg-pink-600">
            Filter <i className="fi fi-ss-filter" />{" "}
          </button>
          <button
            className="flex items-center gap-2 rounded-lg border border-slate-800 px-2 py-1 hover:bg-slate-800 hover:text-white"
            onClick={handleSort}
          >
            Sort <i className="fi fi-ss-sort" />
          </button>
        </div>
        <div className="flex gap-4 py-4">
          <div className="md:flex hidden flex-col gap-4">
            <div className="space-y-2">
              <h3 className="bg-pink-500 p-2">SHOP BY COLLECTIONS</h3>
              <p className="cursor-pointer px-2 py-1 text-lg hover:bg-slate-200">
                All
              </p>
              <p className="cursor-pointer px-2 py-1 text-lg hover:bg-slate-200">
                TableWare
              </p>
              <p className="cursor-pointer px-2 py-1 text-lg hover:bg-slate-200">
                Bowls
              </p>
              <p className="cursor-pointer px-2 py-1 text-lg hover:bg-slate-200">
                Vases
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="bg-pink-500 p-2">SHOP BY Filters</h3>
              <p className="cursor-pointer px-2 py-1 text-lg hover:bg-slate-200">
                All
              </p>
              <p className="cursor-pointer px-2 py-1 text-lg hover:bg-slate-200">
                TableWare
              </p>
              <p className="cursor-pointer px-2 py-1 text-lg hover:bg-slate-200">
                Bowls
              </p>
              <p className="cursor-pointer px-2 py-1 text-lg hover:bg-slate-200">
                Vases
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            {/* <div className="flex flex-wrap justify-center gap-4 sm:justify-between"> */}
            <div className="display-cards">
              {
                products.length
                ? 
                products.map((p, i) => <ProductCard key={p._id} product={p} /> )
                : [...Array(3)].map((v, i)=><ProductCardSkeleton key={i}/>)
              }
            </div>
            {
              allProducts.length &&
            <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
          }
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
