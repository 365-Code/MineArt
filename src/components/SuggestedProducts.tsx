"use client";
import { imgArray, productArray } from "@/utils";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "next/navigation";

const SuggestedProducts = ({pId}: {pId?: any}) => {
  // const { pId } = useParams();
  const [products, setProducts] = useState(Array<any>);

  const relatedProducts = async ()=>{
    try{
      const result = await fetch(`/api/product/searchProducts?pId=${pId}`)
      const res = await result.json()
      if(res.success){
        setProducts(res.products)
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    pId && relatedProducts()
  }, [pId])


  return (
    <div className="container2">
      <h2 className="text-center py-4 text-4xl font-semibold italic">
        You May Also Like
      </h2>
      <div className="px-2 shadow-slate-300 shadow-inner no-scrollbar py-4 gap-4 custom-scrollbar outline-none flex max-w-full overflow-x-scroll">
        {products?.map((product, index) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;