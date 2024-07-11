"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "../Utilities/Modal";
import Product from "./Product";
import Rating from "../Utilities/Rating";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addToCart } from "@/redux/features/cartSlice";
import { addToWish } from "@/redux/features/wishSlice";

const ProductCard = ({ product, showDet }: { product: any, showDet?: boolean }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: product.minQty }));
  };
  
  const handleAddToWishlist = ()=>{
    if(!inWish){
      setInWish(true)
      dispatch(addToWish({ ...product, qty: product.minQty }));
    } else{
      setInWish(false)
    }
  }

  const wish = useAppSelector((state) => state.wishReducer.value.items)

  useEffect(()=>{
    wish.forEach((w) => {
      if (w._id == product._id){
        setInWish(true)
      }
    })

  }, [])

  const [inWish, setInWish] = useState(false);

  return (
    <>
      <div className="group/product overflow-x-hidden h-autoe min-w-[240px] max-w-[350px] space-y-2 justify-self-center md:justify-self-start">
        <div className="relative h-[300px] w-auto">
          <Link href={`/products/${product._id}`}>
            <Image
              width={400}
              height={400}
              src={product.thumbnail}
              alt=""
              className="h-full w-full object-cover object-center"
              // className="h-full w-full object-cover object-center"
            />
          </Link>

          <div className="absolute left-4 top-4 md:h-0 min-h-fit space-y-2 overflow-hidden transition-all duration-300 h-fit md:group-hover/product:h-[112px]">
            <i
              onClick={handleAddToCart}
              className={`fi fi-sr-shopping-cart-add cursor-pointer rounded-lg p-2 transition-all hover:bg-slate-900 hover:text-white bg-white`}
            />
            <i
              onClick={() => setShowModal(true)}
              className="fi fi-rr-eye cursor-pointer rounded-lg bg-white p-2 transition-all hover:bg-slate-900 hover:text-white"
            />
            <i 
              onClick={handleAddToWishlist}
            className={`fi fi-sr-heart cursor-pointer rounded-lg p-2 transition-all hover:bg-slate-900 hover:text-white ${inWish ? "bg-slate-900 text-white": "bg-white"}`} />
            {/* <i className="fi fi-rr-zoom-in cursor-pointer rounded-lg bg-white p-2 transition-all hover:bg-slate-900 hover:text-white" /> */}
          </div>
        </div>
        <div>
          {showDet && <Rating rate={product.rating} />}
          <h3 className="text-nowrap font-semibold">{product.title}</h3>
          <p className="text-base ">Rs.{product.price}</p>
        </div>
      </div>

      <Modal
        compo={<Product item={product} />}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default ProductCard;
