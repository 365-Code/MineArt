import ProductsPage from "@/components/ProductsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Products | Browse Our Luxury Marble Handicrafts & Sculptures",
  description:
    "Explore MineArt's collection of luxury marble handicrafts, sculptures, and custom products. Discover elegance and craftsmanship in every piece.",
  keywords:
    "all products, marble handicrafts, marble sculptures, custom marble products, luxury marble items, handcrafted marble, MineArt",
};

const Page = () => {
  return <ProductsPage />;
};

export default Page;
