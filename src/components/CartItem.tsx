"use client";
import Link from "next/link";
import React, { useState } from "react";
import Quantity from "./Quantity";
import Image from "next/image";

const CartItem = ({ cartItem }: { cartItem: any }) => {
  const [qty, setQty] = useState(cartItem.qty || 1);

  return (
    <div className="flex w-full items-center justify-between p-4 shadow-sm shadow-black/30 hover:bg-slate-100">
      <Link
        href={`/products/${cartItem._id}`}
        className="h-[102px] w-[102px] overflow-hidden rounded-lg"
      >
        <Image
            width={400}
            height={400}
          src={cartItem.img}
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
      <Quantity Qty={cartItem.qty} />
      <p>Rs.{cartItem.price}</p>
      <i className="fi fi-ss-trash icons text-red-600" />
    </div>
  );
};

export default CartItem;
