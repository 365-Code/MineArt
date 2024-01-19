"use client";
import Quantity from "@/components/Quantity";
import { useAppSelector } from "@/redux/store";
import { cartArray } from "@/utils";
import Image from "next/image";
import React from "react";

const Page = () => {

  const wishItems = useAppSelector((state) => state.wishReducer.value.items)

  return (
    <main className="container1">
    <h1 className="text-3xl font-semibold py-4">Shopping Wishlist</h1>
      <div className="w-[700px] p-4 max-w-full h-[70vh] overflow-y-scroll no-scrollbar shadow-sm shadow-black/30 rounded-lg">
        <div className="grid grid-cols-3 sm:grid-cols-4 p-2">
            <p>Product</p>
            <p>Description</p>
            <p>Quantity</p>
        </div>
        {wishItems?.map((c: any, i) => (
          <div key={c._id} className="p-2 grid grid-cols-3 sm:grid-cols-4  items-center justify-between">
            <div className="h-[112px] w-[112px] overflow-hidden rounded-lg">
              <Image
                width={400}
                height={400}
                src={c.img}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <p>Material: <span className="italic text-slate-500 underline">{c.material}</span></p>
              <h3>{c.title}</h3>
            </div>
            <div className="sm:block hidden">
            <Quantity />
            </div>
            <div className="flex">
            <button className="w-fit border border-slate-900 hover:bg-slate-900 hover:text-white px-4 py-2">
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
