"use client";
import Quantity from "@/components/Quantity";
import { addToCart } from "@/redux/features/cartSlice";
import { ProductType } from "@/redux/features/productSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const Page = () => {

  const wishItems = useAppSelector((state) => state.wishReducer.value.items)
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart({ ...product, qty: product.minQty }));
  };


  return (
    <main className="container1">
    <h1 className="text-3xl font-semibold py-4">Shopping Wishlist</h1>
      <div className="w-full p-4 max-w-full h-[70vh] overflow-y-scroll no-scrollbar shadow-sm shadow-black/30 rounded-lg">
        {/* <div className="grid grid-cols-3 sm:grid-cols-4 p-2">
            <p>Product</p>
            <p>Description</p>
            <p>Quantity</p>
        </div> */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {wishItems?.map((w: any, i) => (
          <div key={w._id} className="shadow-sm shadow-black/30 rounded-lg p-2 grid grid-cols-3  items-center justify-between">
            <div className="h-[112px] w-[112px] overflow-hidden rounded-lg">
              <Image
                width={400}
                height={400}
                src={w.thumbnail}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <p>Material: <span className="italic text-slate-500 underline">{w.material}</span></p>
              <h3>{w.title}</h3>
            </div>
            <div className="flex">
            <button onClick={() => handleAddToCart(w)} className="w-fit border border-slate-900 hover:bg-slate-900 hover:text-white px-4 py-2">
              Add to Cart
            </button>
            </div>
          </div>
        ))}
        </div>

      </div>
    </main>
  );
};

export default Page;
