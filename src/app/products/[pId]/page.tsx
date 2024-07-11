import Product from "@/components/Product/Product";
import Suggested from "@/components/Product/SuggestedProducts";
import { ProductType } from "@/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

interface PageParams {
  params: {
    pId: string;
  };
}

const fetchProduct = async (pId: string) => {
  try {
    const result = await fetch(`/api/product/getSingleProduct?pId=${pId}`);
    const res = await result.json();
    if (res.success) {
      return res.product;
      // setProduct(res.product);
      // setImgPreview({ id: 0, img: res.product.thumbnail });
    }
    return notFound();
  } catch (error) {
    return error;
  }
};

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> => {
  const product = (await fetchProduct(params.pId)) as ProductType;
  return {
    title: product.title,
    description: product.description,
    keywords: product.keywords,
    openGraph: {
      images: product.images,
    },
  };
};

const Page = async ({ params }: PageParams) => {
  const product = await fetchProduct(params.pId);
  return (
    <div className="container1 space-y-4">
      <Product item={product} />
      <hr />
      <Suggested />
    </div>
  );
};

export default Page;
