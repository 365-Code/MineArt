"use client";
import Link from "next/link";
import React, { useState } from "react";
import Quantity from "./Quantity";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { productQuantity, removeFromCart } from "@/redux/features/cartSlice";

const SideCartItem = ({ cartItem }: { cartItem: any }) => {

  // console.log(cartItem)

  const dispatch = useDispatch<AppDispatch>()

  const handleRemove = ()=>{
    dispatch(removeFromCart(cartItem._id))
  }

  const handleQty = (qty: any)=>{
    dispatch(productQuantity({qty, _id: cartItem._id}))
  }


  return (
    <div className="group/side-cart-item flex w-full items-center justify-between gap-8 p-4 shadow-sm shadow-black/30 hover:bg-slate-100">
      <Link
        href={`/products/${cartItem._id}`}
        className="h-[102px] w-[102px] overflow-hidden rounded-lg"
      >
        <Image
                width={400}
                height={400}
          src={cartItem.thumbnail}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </Link>
      <div className="flex-1 text-left">
        <div className="flex justify-between text-center font-semibold">
            <Link href={`/products/${cartItem._id}`}>{cartItem.title}</Link>
          <i onClick={handleRemove} className="cursor-pointer group-focus/side-cart-item:translate-x-full fi fi-ss-cross-circle text-pink-500" />
        </div>
        <p className="text-sm text-gray-500">
          Material:{" "}
          <span className="font-semibold lowercase italic underline">
            {cartItem.material}
          </span>
        </p>

        <div className="flex items-center justify-between">
          <p>Rs.{cartItem.price}</p>
          <Quantity Qty={cartItem.qty} minQty={cartItem.minQty} handleChangeQty={handleQty}/>
        </div>
      </div>
    </div>
  );
};

export default SideCartItem;
