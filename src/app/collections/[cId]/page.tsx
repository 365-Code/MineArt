"use client";
import CollectionCard from "@/components/CollectionCard";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const Page = () => {
  const { cId } = useParams();
  const [products, setProducts] = useState(Array<any>);


  const searchProduct = async () => {
    try {
      // const result = await fetch(`/api/product/searchProducts?category=${cId}`);
      const result = await fetch(`/api/product/searchProducts?search=${cId}`);
      const res = await result.json();
      if (res.success) {
        setProducts(res.products);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cId && searchProduct();
  }, []);

  return (
    <main className="container1">
        {products.length ? 
        <>
        <h2 className="text-3xl font-semibold py-4 capitalize">{cId}</h2>
      <div className="display-collection-cards">
        {
            (
                products.map((p, i) => 
                // <ProductCard key={p._id} product={p} />
                <CollectionCard key={p._id} item={p}/>
                )
            ) 
        }
      </div>
      </>

        : (
          <div className="mx-auto text-center">
            <Image
              width={400}
              height={400}
              className="rounded-lg mx-auto"
              //   src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=sph"
              src={"/404.svg"}
              alt=""
            />

            <h1 className="w-full text-center text-3xl font-bold">
              No Products Found
            </h1>
          </div>
        )}
    </main>
  );
};

export default Page;
