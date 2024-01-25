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

  type PromptType = {
    type: string;
    title: string;
    show: boolean;
    handle: any;
  };

  const [showPrompt, setShowPrompt] = useState({} as PromptType);

  const dispatch = useDispatch<AppDispatch>();
  const handleAdd = () => {
    dispatch(addToCart({ ...product, qty: product.minQty }));
  };

  const hidePrompt = (show: boolean) => {
    setShowPrompt({
      type: "",
      title: "",
      show: false,
      handle: "",
    });
  };

  const handleDeletePrompt = ()=>{
    setShowPrompt({
      type: "red",
      title: `Want to delete ${product.title}`,
      handle: handleDeleteProduct,
      show: true,
    })
  }

  const handleDeleteProduct = async () => {
    try {
      const result = await fetch(
        `/api/product/deleteProduct?pId=${product._id}`,
        {
          method: "DELETE",
        },
      );
      const res = await result.json();
      res.success ? toast.success(res.msg) : toast.error(res.msg);
    } catch (error) {
      console.log(error);
    }
    hidePrompt(false);
  };

  return (
    <>
      <AskPrompt
        type={showPrompt.type}
        title={showPrompt.title}
        handle={handleDeleteProduct}
        show={showPrompt.show}
        setShow={hidePrompt}
      />


      <div className="group/product h-auto  w-full min-w-[230px] max-w-[350px] space-y-2 justify-self-center">
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

          <div className="absolute left-4 top-4 md:h-0 max-h-fit space-y-2 overflow-hidden transition-all duration-300 h-fit md:group-hover/product:h-[300px]">
            <i
              onClick={() => setShowEditModal(true)}
              className="fi fi-ss-replace cursor-pointer rounded-lg bg-white p-2 text-blue-500 transition-all hover:bg-blue-500 hover:text-white"
            />
            <i
              onClick={handleDeletePrompt}
              className="fi fi-ss-trash cursor-pointer rounded-lg bg-white p-2 text-red-500 transition-all hover:bg-red-500 hover:text-white"
            />
            
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
        compo={<EditProduct setShowModal={setShowEditModal} item={product} type="edit" />}
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
