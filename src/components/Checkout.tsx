"use client"
import { addToOrders } from "@/redux/features/orderSlice";
import { setAllProducts } from "@/redux/features/productSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { ProductType } from "@/utils";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Checkout = () => {

  const cart = useAppSelector((state) => state.cartReducer.value)
  const authUser = useAppSelector((state) => state.authReducer.value)
  const dispatch = useDispatch<AppDispatch>()

  const nav = useRouter()

  const [orders, setOrders] = useState([] as Array<ProductType>)
  const [addr, setAddr] = useState('')
  const [error, setError] = useState({
    addr: false
  })

  const handleCheckOut = async () => {
    const orderInfo = {user:{email: auth.currentUser?.email, _id: authUser.token}, items: orders, shipping: addr}
    if(!addr){
      setError({addr: true})
      return;
    } else if (!cart.items){
      return
    }
    try {
      const result = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(orderInfo)
      })

      const res = await result.json()
      if(res.success){
        // console.log(res);
        nav.push(res.url)
      }
    } catch (error) {
      return error
    }
  }
  
  useEffect(() => {
    if(cart.items){
      dispatch(addToOrders(cart.items))
      setOrders(cart.items)
    }
  }, [cart.items])

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
          value={addr}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setError({addr: false}); setAddr(e.target.value)}}
          placeholder="Enter Address"
          className="rounded-md font-medium w-full border-none px-4 py-3 outline-none"
        />
        
        { error.addr && <p className="text-xs text-red-500">Enter a valid address</p> }
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
      <button onClick={handleCheckOut} className="w-full p-4 uppercase bg-slate-800 hover:bg-slate-950 text-white transition-all">CHECKOUT</button>
    </div>
  );
};

export default Checkout;
