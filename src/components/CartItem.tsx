"use client";
import Link from "next/link";
import React, { useState } from "react";
import Quantity from "./Quantity";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { productQuantity, removeFromCart } from "@/redux/features/cartSlice";

const CartItem = ({ cartItem }: { cartItem: any }) => {

  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = ()=> {
    dispatch(removeFromCart(cartItem._id))
  }

  const handleQty = (qty: any)=>{
    dispatch(productQuantity({qty, _id: cartItem._id}))
  }

  return (
    <div className="flex w-full items-center justify-between p-4 shadow-sm shadow-black/30 hover:bg-slate-100">
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
      <div>
        <p className="text-sm text-gray-500">
          Material:{" "}
          <span className="font-semibold lowercase italic underline">
            {cartItem.material}
          </span>
        </p>
        <Link href={`/products/${cartItem._id}`} className="font-semibold">
          {cartItem.title}
        </Link>
      </div>
      <div className="text-center">
        <Quantity Qty={cartItem.qty} minQty={cartItem.minQty} handleChangeQty={handleQty}/>
        <p className="font-semibold py-1">Rs.{cartItem.price}</p>
      </div>
      <i onClick={handleRemove} className="fi fi-ss-trash icons text-red-600" />
    </div>
  );
};

export default CartItem;
