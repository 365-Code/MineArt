"use client";
import { imgArray, productArray } from "@/utils";
import React from "react";
import ProductCard from "./ProductCard";

const SuggestedProducts = () => {
  return (
    <div className="container2">
      <h2 className="text-center py-4 text-4xl font-semibold italic">
        You May Also Like
      </h2>
      <div className="px-2 shadow-slate-300 shadow-inner no-scrollbar py-4 gap-4 custom-scrollbar outline-none flex max-w-full overflow-x-scroll">
        {productArray?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;