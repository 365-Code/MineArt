"use client";
import { addToCart, productQuantity } from "@/redux/features/cartSlice";
import { AppDispatch } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Product = ({ item }: { item?: any }) => {
  const { pId } = useParams();

  const [product, setProduct] = useState({
    _id: "",
    title: "",
    material: "",
    thumbnail: "",
    images: [],
    rating: 0,
    description: "",
    price: 0,
    width: 0,
    height: 0,
    length: 0,
    minQty: 1
  });

  const [imgPreview, setImgPreview] = useState({
    id: 0,
    img: "https://img.freepik.com/free-vector/images-concept-illustration_114360-298.jpg?size=626&ext=jpg&ga=GA1.1.1494205593.1703951523&semt=ais",
  });

  const [detail, setDetail] = useState('description')
  
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = ()=>{
    const itm = {
    _id: product._id,
    thumbnail: product.thumbnail,
    title: product.title,
    description: product.description,
    price: product.price,
    qty: qty,
    minQty: product.minQty,
    material: product.material
    }
    dispatch(addToCart(itm))
  }

  const [qty, setQty] = useState(product.minQty || 1);

  const [unit, setUnit] = useState("inches");

  const [avl, setAvl] = useState("none");

  const units: {[key: string]: any} = {
    inches: 1,
    cms: 2.5,
    feets: 1/12,
    mms: 25
  }

  const fetchProduct = async ()=>{
    try{
      const result = await fetch(`/api/product/getSingleProduct?pId=${pId}`)
      const res = await result.json()
      if(res.success){
        setProduct(res.product)
        setImgPreview({id:0, img: res.product.thumbnail})
      }
    }catch(error){
      console.log(error)
      return error
    }
  }

  useEffect(() => {
    if (item) {
      setProduct(item);
      setImgPreview({ id: 0, img: item.thumbnail });
    }
    pId && fetchProduct()
  }, [pId, item]);

  const handleQty = (q: number) => {
    if (qty + q >= 1 && qty + q <= 150) {
      setQty((preQ: number) =>  preQ + q);
    }
  };

  const handleAvl = async (e: any) => {
    const pin = e.target.value;
    try{
      const result = await fetch(`/api/pincode/check?pin=${pin}`)
      const res = await result.json()
      setAvl(res.msg)
    }catch(err){
      console.log(err)
    }

  };

  return (
    <div className="container2 h-full space-y-2">
      <div className="mx-auto h-full flex max-w-full flex-col gap-8 md:flex-row">

        <div className="basis-1/2 space-y-1">

          <div id="imgPreview" className="mx-auto h-[500px] max-w-full transition-all overflow-hidden">
          <Image
                width={400}
                height={400}
              src={imgPreview.img}
              className="h-full w-full object-contain object-center"
              alt=""
            />
          </div>
          {
            product.images?.length > 1 &&
            <div className="no-scrollbar flex max-w-full gap-2 overflow-x-scroll">
            {/* {imgArray?.map((img, index) => ( */}
            {product.images?.map((img, index) => (
              <div
                key={index}
                className={`h-[112px] min-h-[112px] w-[112px] min-w-[112px] cursor-pointer border-pink-500 transition-all focus-visible:w-0 ${
                  imgPreview.id == index ? "border-4" : "border-none"
                }`}
                onClick={() => setImgPreview({ id: index, img })}
              >
                <Image
                width={400}
                height={400}
                  src={img}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>}

        </div>

        <div className="flex flex-col gap-2 max-w-full w-[550px] space-y-2 sm:py-8">
          <span className="font-semibold">
            Material:
            <Link href="#" className="px-1 italic text-slate-500 underline">
              {/* Veitnam */}
              {product.material}
            </Link>
          </span>
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p>
            {product.description}
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
          <div className="w-full space-y-2">
            <div className="flex flex-wrap flex-col gap-2 sm:flex-row">
              <button onClick={handleAddToCart} className="min-w-[200px] flex-1 border border-slate-900 px-2 py-3 transition-all hover:bg-slate-900 hover:text-white">
                Add to Cart
              </button>
              <button className="min-w-[200px] flex-1 border border-slate-900 bg-slate-900 px-2 py-3 text-white hover:bg-slate-950">
                Buy Now
              </button>
            </div>
            <div>
              <div className="shadow-sm shadow-black/20 rounded-lg overflow-hidden">
                <input
                  type="number"
                  onChange={handleAvl}
                  min={100000}
                  max={999999}
                  placeholder="Enter Pincode"
                  className={`w-full flex-1 px-4 py-3 outline-none autofill:bg-transparent`}
                />
                {/* <button
                  type="submit"
                  className="w-auto bg-slate-900 px-3 py-2 text-white"
                >
                  Check Availablity
                </button> */}
              </div>
              <p
                className={`text-sm font-semibold transition-all ${
                  avl == "valid" || avl == "invalid" ? "visible" : "invisible text-transparent"
                } ${avl == "valid" && "text-green-400"} ${
                  avl == "invalid" && "text-red-400"
                }`}
              >
                Product is {avl == "invalid" && "Not"} Deliverable
              </p>
            </div>
          {/* <hr /> */}

          </div>
        </div>

      </div>
      <hr />
      <div className="overflow-y-scroll no-scrollbar max-h-[300px]">
        <div>
          <button onClick={()=> setDetail('description')} className={`${detail == "description" && "bg-slate-300 text-black"} p-4 w-[150px] hover:bg-slate-300 hover:text-black`}>
            Description
          </button>
          <button onClick={()=> setDetail('dimensions')} className={`${detail == "dimensions" && "bg-slate-300"} p-4 w-[150px] hover:bg-slate-300 hover:text-black`}>
            Dimensions
          </button>
        </div>
        <div className="p-4 max-w-full w-[700px]">
        {
          detail == "description" && <p>
            {product.description}
            </p>
        }
        {
          detail == "dimensions" && 
          <div className="space-y-2">
            <p className="text-lg space-x-2 font-semibold text-slate-600">
              <span>Dimensions</span>
              <select onChange={(e: any)=> (setUnit(e.target.value))} className="bg-white p-1 outline-none rounded-lg">
                <option defaultValue={"inches"} value="inches" className="px-3">inches</option>
                <option value="cms" className="px-3">cms</option>
                <option value="mms" className="px-3">mms</option>
              </select>
            </p>
            <ul className="w-4/5">
              <li className="grid grid-cols-3 gap-8">
                <span className="font-semibold">Length</span>
                <span className="font-semibold">Width</span>
                <span className="font-semibold">Height</span>
              </li>
              <li className="grid grid-cols-3 gap-8">
                
              {product.length!=0 && (
                  <span>
                      {product.length * units[unit]+ " "}
                    {unit}
                  </span>
                )}
                {product.width!=0 && (
                  <span>
                    { product.width * units[unit]+ " "}
                    {unit}
                  </span>
                )}
                {product.height!=0 && (
                  <span>
                    {product.height * units[unit]+ " "}
                    {unit}
                  </span>
                )}
              </li>
            </ul>
          </div>
          
        }
        </div>
      </div>
    </div>
  );
};

export default Product;
