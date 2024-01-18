"use client";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import RangeSelector from "@/components/RangeSelector";
import { setAllProducts, sortProducts } from "@/redux/features/productSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(Array<any>);
  const [categories, setCategories] = useState([] as Array<string>);
  const [materials, setMaterials] = useState([] as Array<string>);
  const [filtersInput, setFiltersInput] = useState({
    material: "All",
    category: "All",
  });
  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState(200);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/getAllProducts");
      const res = await result.json();
      if (res.success) {
        setProducts(res.products);
        dispatch(setAllProducts(res.products));
      }
      return res.products;
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleSort = () => {
    dispatch(sortProducts());
  };

  const fetchAllFilters = async () => {
    try {
      const result = await fetch("/api/product/getFilters");
      const res = await result.json();
      if (res.success) {
        setCategories(res.categories);
        setMaterials(res.materials);
      }
    } catch (error) {
      return error;
    }
  };

  const allProducts = useAppSelector((state) => state.productReducer.value);
  const pL = allProducts.length;
  const pages = pL / 9 > 1 ? Math.round(pL / 9) + (pL % 9 ? 1 : 0) : 1;

  useEffect(() => {
    !allProducts.length && fetchAllProducts();
    fetchAllFilters();
  }, []);

  const handleFilters = async () => {
    const searchQuery = searchParams.get("search") || "All";
    const query = `search=${searchQuery}&category=${filtersInput.category}&material=${filtersInput.material}`;
    try {
      const result = await fetch(`/api/product/searchProducts?${query}`);
      const res = await result.json();
      if (res.success) {
        setLoading(false);
        dispatch(setAllProducts(res.products));
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    setLoading(true);
    handleFilters();
  }, [filtersInput]);

  useEffect(() => {
    setLoading(true);

    setProducts(() =>
      allProducts.slice((currentPage - 1) * 9, currentPage * 9),
    );
    setLoading(false);
  }, [allProducts, currentPage, setCurrentPage]);

  return (
    <main className="container1">
      <div className="container2">
        <h2 className="text-4xl">Catalog</h2>
        <hr className="my-1 h-[2px] w-3/5 bg-slate-900" />
        <div
          className={`flex items-center ${
            searchParams.get("search") && "justify-between"
          } gap-4 `}
        >
          {searchParams.get("search") && (
            <h2 className="text-xl">
              Search Results For:{" "}
              <span className="font-semibold">
                {searchParams.get("search")}
              </span>
            </h2>
          )}
          <div className="flex flex-1 items-center justify-end gap-4 justify-self-end">
            <button
              onClick={() => setShowFilter(true)}
              className="flex  items-center gap-2 rounded-lg border border-pink-500 bg-pink-500 px-2 py-1 text-white hover:bg-pink-600"
            >
              Filter <i className="fi fi-ss-filter" />{" "}
            </button>
            <button
              className="flex items-center gap-2 rounded-lg border border-slate-800 px-2 py-1 hover:bg-slate-800 hover:text-white"
              onClick={handleSort}
            >
              Sort <i className="fi fi-ss-sort" />
            </button>
          </div>
        </div>
        <div className="flex gap-4 py-4">
          <div className={`flex-col gap-4 md:flex`}>
            <div className="space-y-2">
              <h3 className="bg-pink-500 p-2 text-lg text-white font-semibold tracking-wide">Collections</h3>
              {categories.map((ctg, i) => (
                <button
                key={i}
                  onClick={() =>
                    setFiltersInput((preVal) => ({ ...preVal, category: ctg }))
                  }
                  className={`${
                    filtersInput.category == ctg && "bg-slate-300"
                  } w-full cursor-pointer px-2 py-1 text-left text-lg hover:bg-slate-300`}
                >
                  {ctg}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              <h3 className="bg-pink-500 p-2 text-lg text-white font-semibold tracking-wide">Materials</h3>
              {materials.map((mtrl, i) => (
                <button
                key={i}
                  onClick={() =>
                    setFiltersInput((preVal) => ({ ...preVal, material: mtrl }))
                  }
                  className={`${
                    filtersInput.material == mtrl && "bg-slate-300"
                  } w-full cursor-pointer px-2 py-1 text-left text-lg hover:bg-slate-200`}
                >
                  {mtrl}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              <h3 className="bg-pink-500 p-2 text-white font-semibold tracking-wide">Price</h3>
              comming soon
              <div className="relative">
                <RangeSelector max={500} />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="display-cards">
              {products.length > 0 &&
                products.map((p, i) => <ProductCard key={p._id} product={p} />)
              }
              {loading &&
                [...Array(3)].map((v, i) => <ProductCardSkeleton key={i} />)
              }
            </div>
            {
              !loading && !products.length && <div className="w-full h-full flex flex-col items-center justify-center"><h3 className="text-2xl font-semibold">Products Not Found</h3></div>
            }
            {allProducts.length > 0 && (
              <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
