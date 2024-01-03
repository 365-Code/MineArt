"use client";
import { imgArray, pincode } from "@/utils";
import { log } from "console";
import Link from "next/link";
import React, { useState } from "react";

const Product = () => {
  const [imgPreview, setImgPreview] = useState({
    id: 0,
    img: imgArray[0]
  }
  );

  const [qty, setQty] = useState(1);

  const  [unit, setUnit] = useState("inches");

  const [avl, setAvl] = useState("none")

  const handleQty = (q: number)=>{

    if(qty+q>=1 && qty+q<=20){
      setQty(qty + q)
    }
  }

  const handlePreview = (img: any)=>{
    setImgPreview(img);
  }

  // const handleAvl = (e: any)=>{
  //   const num = e.target.value
  //   if(pincode.find((n: any)=> (n==num))){
  //     setAvl("true")
  //   }
  //   setAvl("false")
  // }

  const handleAvl = (e: any)=>{
    const num = e.target.value
    if(num && pincode.find((n: any)=> (n==num))){
      setAvl("valid")
    } else if(num){
      setAvl("invalid")
    } else{
      setAvl("none")
    }

  }


  return (
    <div className="container2">
      <div className="flex w-full flex-col gap-8 sm:flex-row">
        <div className="w-full space-y-1 sm:w-1/2">
          <div id="imgPreview" className="h-[400px] transition-all">
            <img
              src={imgPreview.img}
              className="h-full w-full object-cover object-center transition-all"
              alt=""
            />
          </div>
          <div className="no-scrollbar flex max-w-full gap-2 overflow-x-scroll">
            {
                imgArray?.map((img, index)=>
                    <div 
                    key={index}
                    className={`h-[112px] min-h-[112px] w-[112px] min-w-[112px] cursor-pointer transition-all focus-visible:w-0 border-slate-600 ${imgPreview.id == index? "border-4": "border-none"}`}
                    onClick={()=>handlePreview({id: index,img})}>
                    <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover object-center"
                    />
                </div>
                )
            }
          </div>
        </div>
        <div className="w-full space-y-2 sm:py-8 flex-1">
          <span className="font-semibold">
            Material:
            <Link href="#" className="italic px-1 text-slate-500 underline">
              Veitnam
            </Link>
          </span>
          <h2 className="text-3xl font-semibold">Product-Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempora similique soluta nam ab dolores dolore consequuntur
            sit illum facilis non!
          </p>
          <hr />
          <div className="flex items-center gap-8">
            <p className="font-semibold text-lg">Rs. 300</p>
            <div className="flex items-center">
              <i className="fi fi-sr-square-minus cursor-pointer text-2xl" onClick={()=>handleQty(-1)}/>
              <span className="font-semibold w-8 h-8 flex items-center justify-center text-center mx-1 rounded-lg">{qty}</span>
              <i className="fi fi-sr-square-plus cursor-pointer text-2xl" onClick={()=>handleQty(1)}/>
              {
                qty == 20 && <span className="text-xs px-4 text-red-500 font-bold">Max Limit Reached</span>
              }
            </div>
          </div>
          <hr />
          <div className="space-y-2">
            <p className="text-lg font-semibold text-slate-600">Dimensions<span className="underline cursor-pointer" onClick={()=>setUnit(unit == "cms"?"inches":"cms")}>&#40;{unit}&#41;</span></p>
            <ul className="w-4/5">
              <li className="grid grid-cols-3 gap-8">
                <span className="font-semibold">Width</span>
                <span className="font-semibold">Length</span>
                <span className="font-semibold">Height</span>
              </li>
              <li className="grid grid-cols-3 gap-8">
                <span>{unit == "inches"? 5 : 5*2.5}{unit}</span>
                <span>{unit == "inches"? 5 : 5*2.5}{unit}</span>
                <span>{unit == "inches"? 5 : 5*2.5}{unit}</span>
              </li>
            </ul>
          </div>
          <hr />
          <div className="space-x-2 md:block flex flex-col">
            <button className="border border-slate-900 hover:bg-slate-900 hover:text-white p-2 min-w-[40%] transition-all">
              Add to Cart
            </button>
            <button className="border border-slate-900 text-white bg-slate-900 hover:bg-slate-950 p-2 w-2/5">
              Buy Now
            </button>
          </div>
          <div className=" flex md:flex-row flex-col border border-slate-900">
            <input type="number" onChange={handleAvl} min={100000} max={999999} placeholder="Enter Pincode" className={`autofill:bg-transparent py-2 px-3 flex-1 border outline-none w-full`} />
            <button type="submit" className="py-2 px-3 bg-slate-900 text-white w-auto">Check Availablity</button>
          </div>
          <p className={`transition-all font-semibold text-sm ${ (avl == "valid") || (avl == "invalid") ? "visible" : "invisible"} ${avl == "valid" && "text-green-400"} ${avl == "invalid" && "text-red-400"}`}>
            Product is {avl == "invalid" && "Not"} Deliverable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
