import React from "react";
import SideCartItem from "./SideCartItem";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";

const SideCart = ({setShowCart}: {setShowCart: any}) => {

  const cart = useAppSelector((state) => state.cartReducer.value)


  return (
    <div className="custom-scrollbar flex max-h-[450px] flex-col overflow-hidden rounded-lg bg-white">
      <h3 className="py-3 text-lg font-semibold">Shopping Cart</h3>
      <div className="no-scrollbar z-10 h-full flex-1 space-y-2 overflow-y-scroll ">
        {/* {cartArray.map((c) => ( */}
        {cart.items.map((c) => (
          <SideCartItem key={c._id} cartItem={c} />
        ))}
      </div>
      {/* <SideCartItem cartItem={cartArray[0]} /> */}
      {/* <hr /> */}
      <div>
        <p className="p-4 font-semibold border-t">
          Subtotal: Rs.{ parseFloat((cart.subtotal).toFixed(2)) }
        </p>
        <Link href={"/cart"}>
          <button onClick={() => setShowCart(false)} className="w-full bg-slate-900 p-4 font-semibold text-white transition-all">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideCart;
