"use client"
import { useAppSelector } from "@/redux/store";
import { cartArray } from "@/utils";
import React from "react";

const Checkout = () => {

  const cart = useAppSelector((state) => state.cartReducer.value)

  return (
    <div className="w-[380px] h-[550px] container2 flex flex-col justify-between mx-auto text-base gap-4 bg-[#f6f6f6] px-4 py-8 font-semibold uppercase">
      <h3 className="text-lg font-bold">Summary</h3>
      <hr />
      <p className="flex items-center justify-between">
        <span>Items {cart.items.length}</span> <span>Rs. {cart.subtotal}</span>
      </p>
      <div className="space-y-2">
        <p>Shipping</p>
        <input
          type="text"
          placeholder="Enter Address"
          className="rounded-md font-medium w-full border-none px-4 py-3 outline-none"
        />
      </div>
      <div className="space-y-2">
        <p>Give Code</p>
        <input
          type="text"
          placeholder="Enter Your Code"
          className="rounded-md font-medium w-full border-none px-4 py-3 outline-none"
        />
      </div>
      <hr />
      <p className="flex items-center justify-between">
        <span>Total Price</span> <span>Rs. {cart.subtotal}</span>
      </p>
      <button className="w-full p-2 uppercase bg-slate-900 hover:bg-slate-950 text-white transition-all">CHECKOUT</button>
    </div>
  );
};

export default Checkout;
