"use client";
import Link from "next/link";
import React, { useState } from "react";

const CartItem = ({ cartItem }: { cartItem: any }) => {
  const [qty, setQty] = useState((cartItem.qty || 1));

  const handleQty = (q: number) => {
    if (qty + q >= 1 && qty + q <= 20) {
      setQty(qty + q);
    }
  };

  return (
    <Link href={`/products/${cartItem.id}`} className="hover:bg-slate-100 w-full shadow-sm shadow-black/30 p-4 flex items-center justify-between">
      <div className="h-[102px] w-[102px] overflow-hidden rounded-lg">
        <img src={cartItem.img} alt="" className="w-full h-full object-cover object-center"/>
      </div>
      <div>
        <p className="text-sm text-gray-500">Material: <span className="italic underline font-semibold lowercase">{cartItem.material}</span></p>
        <h3 className="font-semibold">{cartItem.title}</h3>
      </div>
      <div className="flex items-center">
        <i
          className="fi fi-sr-square-minus cursor-pointer text-2xl"
          onClick={() => handleQty(-1)}
        />
        <span className="mx-1 flex h-8 w-8 items-center justify-center rounded-lg text-center font-semibold">
          {qty}
        </span>
        <i
          className="fi fi-sr-square-plus cursor-pointer text-2xl text-blue-600"
          onClick={() => handleQty(1)}
        />
        {qty == 20 && (
          <span className="px-4 text-xs font-bold text-red-500">
            Max Limit Reached
          </span>
        )}
      </div>
      <p>Rs.{cartItem.price}</p>
      <i className="fi fi-ss-trash icons text-red-600" />
    </Link>
  );
};

export default CartItem;
