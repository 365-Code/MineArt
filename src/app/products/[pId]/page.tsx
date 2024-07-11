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
    const response = await fetch(`${process.env.BASE_URL}/api/product/getSingleProduct?pId=${pId}`);
    const res = await response.json();
    if (res.success) {
      return res.product;
    }
    return notFound();
  } catch (error) {
    throw error;
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
      images: {
        url: product.thumbnail
      },
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description
    }
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
