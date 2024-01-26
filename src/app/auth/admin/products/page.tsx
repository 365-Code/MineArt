"use client";
import AdminLayout from "@/components/AdminLayout";
import AdminProductCard from "@/components/AdminProductCard";
import EditProduct from "@/components/EditProduct";
import Modal from "@/components/Modal";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { ProductType, setAllProducts } from "@/redux/features/productSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([] as Array<ProductType>);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/getAllProducts");
      const res = await result.json();
      if (res.success) {
        dispatch(setAllProducts(res.products));
        setProducts(res.products);
      }
      return res.products;
    } catch (error) {
      return error;
    }
  };

  const searchProducts = async () => {
    setLoading(true);
    try {
      const result = await fetch(
        `/api/product/searchProducts?search=${searchInput}`,
      );
      const res = await result.json();
      if (res.success) {
        setProducts(res.products);
        setLoading(false);
      }
      return res.products;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      searchProducts();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [searchInput]);

  return (
    <>
      <AdminLayout>
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-left text-xl font-semibold">All Products</h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-lg border border-black px-4 py-2 font-semibold hover:bg-slate-900 hover:text-white"
          >
            <span>Add Product</span>
            <i className="fi fi-sr-add" />
          </button>
        </div>
        <input
          type="search"
          name="search"
          value={searchInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          className=" w-full rounded-lg px-4 py-2"
          autoComplete="false"
          placeholder="Search Products"
        />
        <div className="display-cards no-scrollbar h-full max-h-[400px] overflow-y-scroll">
          {products.length > 0 &&
            products?.map((p) => <AdminProductCard key={p._id} product={p} />)}
          {!loading && products.length == 0 ? (
            <div className="h-fit w-full justify-center py-4 text-center text-3xl">
              <Image
                src={"/404.svg"}
                width={400}
                height={400}
                alt="notfound"
                className="mx-auto"
              />
              <h3>No Products Found</h3>
            </div>
          ) : (
            loading &&
            [...Array(3)].map((v, i) => <ProductCardSkeleton key={i} />)
          )}
        </div>
      </AdminLayout>
      <Modal
        compo={<EditProduct setShowModal={setShowModal} type="add" />}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Page;
