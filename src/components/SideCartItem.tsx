"use client";
import Link from "next/link";
import React, { useState } from "react";
import Quantity from "./Quantity";
import Image from "next/image";

const SideCartItem = ({ cartItem }: { cartItem: any }) => {
  return (
    <div className="flex w-full items-center justify-between gap-8 p-4 shadow-sm shadow-black/30 hover:bg-slate-100">
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
      <div className="flex-1 text-left">
        <Link
          href={`/products/${cartItem._id}`}
          className="flex justify-between text-center font-semibold"
        >
          <span>{cartItem.title}</span>
          <i className="fi fi-ss-cross-circle text-pink-500" />
        </Link>
        <p className="text-sm text-gray-500">
          Material:{" "}
          <span className="font-semibold lowercase italic underline">
            {cartItem.material}
          </span>
        </p>

        <div className="flex items-center justify-between">
          <p>Rs.{cartItem.price}</p>
          <Quantity Qty={cartItem.qty} />
        </div>
      </div>
    </div>
  );
};

export default SideCartItem;
