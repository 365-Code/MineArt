"use client";
import Link from "next/link";
import React, { useState } from "react";
import Quantity from "./Quantity";

const SideCartItem = ({ cartItem }: { cartItem: any }) => {

  return (
    <div className="hover:bg-slate-100 w-full gap-8 shadow-sm shadow-black/30 p-4 flex items-center justify-between">
      <Link href={`/products/${cartItem.id}`}  className="h-[102px] w-[102px] overflow-hidden rounded-lg">
        <img src={cartItem.img} alt="" className="w-full h-full object-cover object-center"/>
      </Link>
      <div className="flex-1 text-left">
        <Link href={`/products/${cartItem.id}`}  className="font-semibold flex justify-between text-center"><span>{cartItem.title}</span>
        <i className="fi fi-ss-cross-circle text-amber-500"/>
        </Link>
        <p className="text-sm text-gray-500">Material: <span className="italic underline font-semibold lowercase">{cartItem.material}</span></p>

        <div className="flex items-center justify-between">
            <p>Rs.{cartItem.price}</p>
            <Quantity Qty={cartItem.qty}/>
        </div>
      </div>

    </div>
  );
};

export default SideCartItem;
