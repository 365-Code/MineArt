"use client";
import FilterCategories from "@/components/FilterCategories";
import FilterMaterials from "@/components/FilterMaterials";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import RangeSelector from "@/components/RangeSelector";
import { setAllProducts, sortProducts } from "@/redux/features/productSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { getPages } from "@/utils";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(Array<any>);
  // const [categories, setCategories] = useState([] as Array<string>);
  // const [materials, setMaterials] = useState([] as Array<string>);
  const [filtersInput, setFiltersInput] = useState({
    material: "All",
    category: "All",
  });
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const nav= useRouter()

  const searchParams = useSearchParams();
  
  const dispatch = useDispatch<AppDispatch>();

  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/getAllProducts");
      const res = await result.json();
      if (res.success) {
        setProducts(res.products);
        dispatch(setAllProducts(res.products));
        setLoading(false)
      }
      return res.products;
    } catch (error) {
      setLoading(false)
      return error;
    }
  };

  const handleSort = () => {
    dispatch(sortProducts());
  };

  // const fetchAllFilters = async () => {
  //   try {
  //     const result = await fetch("/api/product/getFilters");
  //     const res = await result.json();
  //     if (res.success) {
  //       setCategories(res.categories);
  //       setMaterials(res.materials);
  //     }
  //   } catch (error) {
  //     return error;
  //   }
  // };

  const allProducts = useAppSelector((state) => state.productReducer.value);
  // const pL = allProducts.length;
  const noOfItems = 12;
  const pages = getPages(allProducts, noOfItems)

  // const handleFilters = async () => {
  //   const searchQuery = searchParams.get("search") || "All";
  //   const query = `search=${searchQuery}&category=${filtersInput.category}&material=${filtersInput.material}`;
  //   try {
  //     const result = await fetch(`/api/product/searchProducts?${query}`);
  //     const res = await result.json();
  //     if (res.success) {
  //       dispatch(setAllProducts(res.products));
  //       nav.push(`/products?${query}`)
  //     }
  //   } catch (error) {
  //     return error;
  //   }
  // };

  useEffect(() => {
    setLoading(true)
    !allProducts.length && fetchAllProducts();
    // fetchAllFilters();
  }, []);

  // useEffect(() => {
  //   filtersInput && handleFilters();
  // }, [filtersInput]);

  useEffect(() => {
    setProducts(() =>
      allProducts.slice((currentPage - 1) * noOfItems, currentPage * noOfItems),
    );
    setLoading(false)
  }, [allProducts, currentPage]);

  return (
    <main className="container1 relative">
      <div className="container2">
        <h2 className="text-4xl">Catalog</h2>
        <hr className="my-1 h-[2px] w-3/5 bg-slate-900" />
        <div
          className={`flex items-center ${
            searchParams.get("search") && "justify-between"
          } gap-4 `}
        >
          { (searchParams.get("search") != "All" || searchParams.get("search") != "") && (
            <h2 className="text-xl">
              Search Results For:{" "}
              <span className="font-semibold">
                {searchParams.get("search")}
              </span>
            </h2>
          )}
          <div className="flex flex-1 items-center justify-end gap-4 justify-self-end">
            <button
              onClick={() => setShowFilter(!showFilter)}
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
        <div className="flex flex-col gap-4 py-4">
          <div
            className={`${
              showFilter ? "h-fit md:border-2 py-8 md:p-8" : "h-0 border-none p-0"
            } max-h-fit w-full min-h-fit max-w-full space-y-2 overflow-hidden border-black text-center`}
          >

            <FilterCategories />
            <FilterMaterials/>

            <div className="flex flex-col max-w-full sm:flex-row items-center gap-4 justify-center">
              <h3 className="font-semibold">Price Range</h3>
              <RangeSelector min={100} steps={10} max={5000} />
            </div>

          </div>

          <div className="flex-1 space-y-4">
            <div className="display-cards">
              {products.length > 0 &&
                products.map((p, i) => <ProductCard key={p._id} product={p} />)}
              {loading &&
                [...Array(3)].map((v, i) => <ProductCardSkeleton key={i} />)}
            </div>
            { (products?.length == 0) && !loading && (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold">Products Not Found</h3>
              </div>
            )}
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