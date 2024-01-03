import { cartArray } from "@/utils";
import React from "react";

const Checkout = () => {
  return (
    <div className="w-[380px] container2 h-full flex flex-col justify-between text-base gap-4 bg-[#f6f6f6] px-4 py-8 font-semibold uppercase">
      <h3 className="text-lg font-bold">Summary</h3>
      <hr />
      <p className="flex items-center justify-between">
        <span>Items {cartArray.length}</span> <span>Rs.{340.00}</span>
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
        <span>Total Price</span> <span>Rs.{340.00}</span>
      </p>
      <button className="w-full p-2 uppercase bg-slate-900 hover:bg-slate-950 text-white transition-all">CHECKOUT</button>
    </div>
  );
};

export default Checkout;
