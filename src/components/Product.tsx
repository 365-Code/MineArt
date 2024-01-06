"use client";
import { imgArray, pincode, productArray } from "@/utils";
import { log } from "console";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Product = ({ item }: { item?: any }) => {
  const { pId } = useParams();
  const [product, setProduct] = useState({
    id: "",
    title: "",
    material: "",
    img: "",
    images: [],
    rating: 0,
    desc: "",
    price: 0,
    dimension: {
      width: 0,
      height: 0,
      length: 0
    }
  });

  const [imgPreview, setImgPreview] = useState({
    id: 0,
    img: "https://img.freepik.com/free-vector/images-concept-illustration_114360-298.jpg?size=626&ext=jpg&ga=GA1.1.1494205593.1703951523&semt=ais"
  });

  useEffect(() => {
    if (item) {
      setProduct(item);
      setImgPreview({id: 0, img: item.img})
    }

    const ind = productArray.findIndex((p) => p.id == pId);

    if (ind != -1) {
      const prod: any = productArray[ind];
      setProduct(prod);
      setImgPreview({id: 0, img: prod.img})
    }

  }, []);

  const [qty, setQty] = useState(1);

  const [unit, setUnit] = useState("inches");

  const [avl, setAvl] = useState("none");

  const handleQty = (q: number) => {
    if (qty + q >= 1 && qty + q <= 20) {
      setQty(qty + q);
    }
  };

  const handlePreview = (img: any) => {
    setImgPreview(img);
  };

  // const handleAvl = (e: any)=>{
  //   const num = e.target.value
  //   if(pincode.find((n: any)=> (n==num))){
  //     setAvl("true")
  //   }
  //   setAvl("false")
  // })

  const handleAvl = (e: any) => {
    const num = e.target.value;
    if (num && pincode.find((n: any) => n == num)) {
      setAvl("valid");
    } else if (num) {
      setAvl("invalid");
    } else {
      setAvl("none");
    }
  };

  return (
    <div className="container2">
      <div className="flex w-full flex-col gap-8 sm:flex-row">
        <div className=" w-full space-y-1 sm:w-1/2">
          <div id="imgPreview" className="h-[400px] transition-all">
            <img
              src={imgPreview.img}
              className="h-full w-full object-cover object-center transition-all"
              alt=""
            />
          </div>
          <div className="no-scrollbar flex max-w-full gap-2 overflow-x-scroll">
            {/* {imgArray?.map((img, index) => ( */}
            {product.images?.map((img, index) => (
              <div
                key={index}
                className={`h-[112px] min-h-[112px] w-[112px] min-w-[112px] cursor-pointer border-slate-600 transition-all focus-visible:w-0 ${
                  imgPreview.id == index ? "border-4" : "border-none"
                }`}
                onClick={() => handlePreview({ id: index, img })}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex-1 space-y-2 sm:py-8">
          <span className="font-semibold">
            Material:
            <Link href="#" className="px-1 italic text-slate-500 underline">
              {/* Veitnam */}
              {product.material}
            </Link>
          </span>
          <h2 className="text-3xl font-semibold">Product-Title</h2>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            similique soluta nam ab dolores dolore consequuntur sit illum
            facilis non! */}
            {product.desc}
          </p>
          <hr />
          <div className="flex items-center gap-8">
            <p className="text-lg font-semibold">Rs. {product.price}</p>
            <div className="flex items-center">
              <i
                className="fi fi-sr-square-minus cursor-pointer text-2xl"
                onClick={() => handleQty(-1)}
              />
              <span className="mx-1 flex h-8 w-8 items-center justify-center rounded-lg text-center font-semibold">
                {qty}
              </span>
              <i
                className="fi fi-sr-square-plus cursor-pointer text-2xl"
                onClick={() => handleQty(1)}
              />
              {qty == 20 && (
                <span className="px-4 text-xs font-bold text-red-500">
                  Max Limit Reached
                </span>
              )}
            </div>
          </div>
          <hr />
          <div className="space-y-2">
            <p className="text-lg font-semibold text-slate-600">
              Dimensions
              <span
                className="cursor-pointer underline"
                onClick={() => setUnit(unit == "cms" ? "inches" : "cms")}
              >
                &#40;{unit}&#41;
              </span>
            </p>
            <ul className="w-4/5">
              <li className="grid grid-cols-3 gap-8">
                <span className="font-semibold">Width</span>
                <span className="font-semibold">Length</span>
                <span className="font-semibold">Height</span>
              </li>
              <li className="grid grid-cols-3 gap-8">
                <span>
                  {unit == "inches" ? product.dimension.width : product.dimension.width * 2.5}
                  {unit}
                </span>
                <span>
                  {unit == "inches" ? product.dimension.height : product.dimension.height * 2.5}
                  {unit}
                </span>
                <span>
                  {unit == "inches" ? product.dimension.length : product.dimension.length * 2.5}
                  {unit}
                </span>
              </li>
            </ul>
          </div>
          <hr />

          <div className="w-full space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="w-full min-w-fit flex-1 border border-slate-900 p-2 transition-all hover:bg-slate-900 hover:text-white">
                Add to Cart
              </button>
              <button className="w-full basis-1/2 border border-slate-900 bg-slate-900 p-2 text-white hover:bg-slate-950">
                Buy Now
              </button>
            </div>
            <div>
              <div className=" flex flex-col border border-slate-900 md:flex-row">
                <input
                  type="number"
                  onChange={handleAvl}
                  min={100000}
                  max={999999}
                  placeholder="Enter Pincode"
                  className={`w-full flex-1 border px-3 py-2 outline-none autofill:bg-transparent`}
                />
                <button
                  type="submit"
                  className="w-auto bg-slate-900 px-3 py-2 text-white"
                >
                  Check Availablity
                </button>
              </div>
              <p
                className={`text-sm font-semibold transition-all ${
                  avl == "valid" || avl == "invalid" ? "visible" : "invisible"
                } ${avl == "valid" && "text-green-400"} ${
                  avl == "invalid" && "text-red-400"
                }`}
              >
                Product is {avl == "invalid" && "Not"} Deliverable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
