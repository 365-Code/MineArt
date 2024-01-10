"use client"
import Product from "@/components/Product";
import Suggested from "@/components/SuggestedProducts";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {


  const [product, setProduct] = useState()
  const {pId} = useParams()
  
  const fetchProduct = async ()=>{
    try{
      const result = await fetch(`/api/product/getSingleProduct?pId=${pId}`)
      const res = await result.json()
      if(res.success){
        setProduct(res.product)
      }
    }catch(error){
      console.log("Error in PID: ",error)
      return error
    }
  }

  useEffect(()=>{
    pId && fetchProduct()
  }, [pId])

  return (
    <div className="container1 space-y-4">
      <Product item={product}/>
      <hr />
      <Suggested pId={pId} />
    </div>
  );
};

export default Page;
