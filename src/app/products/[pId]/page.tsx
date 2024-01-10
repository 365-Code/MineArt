"use client"
import Product from "@/components/Product";
import Suggested from "@/components/SuggestedProducts";
import React from "react";

const Page = () => {

  return (
    <div className="container1 space-y-4">
      <Product />
      <hr />
      <Suggested/>
    </div>
  );
};

export default Page;
