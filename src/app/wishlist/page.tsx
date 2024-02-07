"use client";
import Quantity from "@/components/Quantity";
import { addToCart } from "@/redux/features/cartSlice";
import { ProductType } from "@/utils";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToWish, removeFromWish } from "@/redux/features/wishSlice";

const Page = () => {

  const wishItems = useAppSelector((state) => state.wishReducer.value.items)
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart({ ...product, qty: product.minQty }));
    dispatch(removeFromWish(product._id));
  };
  const handleRemoveFromWish = (product: ProductType) => {
    dispatch(removeFromWish(product._id));
  };


  return (
    <main className="container1">
    <h1 className="text-3xl font-semibold py-4">Shopping Wishlist</h1>
      <div className="w-full max-w-full h-[70vh] overflow-y-scroll no-scrollbar shadow-sm shadow-black/30 rounded-lg">
          {!wishItems.length ?
          <div className="flex flex-col items-center">
            <img src="empty-wish.svg" alt="" width={400} height={400} />
          <h3 className="text-xl sm:text-3xl font-semibold">No Items Yet</h3>
          </div>
          :
            <div className="flex flex-wrap justify-around w-full gap-4">
            {wishItems?.map((w: any) => (
              <div key={w._id} className="max-w-full md:max-w-[500px]  min-w-[350px] flex-1 shadow-sm shadow-black/10 p-2 px-4 flex items-center justify-between gap-2">
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
                <div className="space-y-1">
                <button onClick={() => handleAddToCart(w)} className="w-fit border border-slate-900 text-sm hover:bg-slate-900 hover:text-white px-2 py-1">
                  Add to Cart
                </button>
                <button onClick={() => handleRemoveFromWish(w)} className="text-sm flex gap-2 items-center hover:text-red-500"><i className="fi fi-sr-cross-small" /> Remove</button>
                </div>
              </div>
            ))}
            </div>
          }


      </div>
    </main>
  );
};

export default Page;
