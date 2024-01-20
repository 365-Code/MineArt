"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Product from "./Product";
import Rating from "./Rating";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/features/cartSlice";
import { toast } from "react-toastify";
import EditProduct from "./EditProduct";
import AskPrompt from "./AskPrompt";

const AdminProductCard = ({ product }: { product: any }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false)

  type PromptType = {
    type: string,
    title: string,
    show: boolean,
    handle: any
  }

  const [showPrompt, setShowPrompt] = useState({} as PromptType)

  const dispatch = useDispatch<AppDispatch>();
  const handleAdd = () => {
    dispatch(addToCart({ ...product, qty: product.minQty }));
  };

  const handleDeleteProduct = async ()=>{
    setShowDelete(false)
    try {
      const result = await fetch(`/api/product/deleteProduct?pid=${'product._id'}`, {
        method: 'DELETE'
      })
      const res = await result.json();
      res.success ? toast.success(res.msg) : toast.error(res.msg)
    } catch (error) {
        console.log(error)
    }
  }

  const hidePrompt = (show: boolean) => {
    setShowPrompt({
      type: "",
      title: "",
      show: false,
      handle: ""
    })
  }

  return (
    <>
      <AskPrompt type={showPrompt.type} title={showPrompt.title} handle={showPrompt.handle} show={showPrompt.show} setShow={hidePrompt} />

      <div className="group/product h-auto w-fit min-w-[280px] max-w-[350px] space-y-2 justify-self-center md:justify-self-start">
        <div className="relative h-[300px] w-auto">
          <Link href={`/products/${product._id}`}>
            <Image
              width={400}
              height={400}
              src={product.thumbnail}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </Link>

          <div className="absolute left-4 top-4 h-0 max-h-fit space-y-2 overflow-hidden transition-all duration-300 md:group-hover/product:h-[300px]">
            <i onClick={() => setShowEditModal(true)} className="fi fi-ss-replace cursor-pointer bg-white rounded-lg text-blue-500 p-2 transition-all hover:bg-blue-500 hover:text-white" />
            <i onClick={()=> setShowPrompt({type: "red", title:`want to delete ${product.title}`, handle: handleDeleteProduct, show:true})} className="fi fi-ss-trash cursor-pointer rounded-lg bg-white text-red-500 p-2 transition-all hover:bg-red-500 hover:text-white" />
            <i
              onClick={() => setShowModal(true)}
              className="fi fi-rr-eye cursor-pointer rounded-lg bg-white p-2 transition-all hover:bg-slate-900 hover:text-white"
            />
          </div>
        </div>
        <div>
          <Rating rate={product.rating} />
          <h3 className="text-nowrap font-semibold">{product.title}</h3>
          <p className="text-base ">Rs.{product.price}</p>
        </div>
      </div>

      
      <Modal
        compo={<EditProduct item={product} type="edit"/>}
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      />

      <Modal
        compo={<Product item={product} />}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default AdminProductCard;
