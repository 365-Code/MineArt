import React from "react";
import CollectionPage from "@/components/CollectionPage";
import CollectionCard from "@/components/CollectionCard";
import { ProductType } from "@/utils";
import Image from "next/image";
import { Metadata } from "next";

interface PageParams {
  params: {
    cId: string;
  };
}

const searchProduct = async (cId: string) => {
  try {
    // const result = await fetch(`/api/product/searchProducts?category=${cId}`);
    const response = await fetch(`/api/product/searchProducts?search=${cId}`);
    const result = await response.json();
    if (result.success) {
      return result.prodcuts as ProductType[];
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> => {
  const collections = await searchProduct(params.cId);
  return {
    title: params.cId,
    openGraph: {
      images: {
        url: collections[0]?.images ? collections[0].images[0] : ""
      }
    }
  };
};

const Page = async ({ params }: PageParams) => {
  const products = await searchProduct(params.cId);

  return (
    <main className="container1">
      {products ? (
        <>
          <h2 className="py-4 text-3xl font-semibold capitalize">
            {decodeURIComponent(params.cId)}
          </h2>
          <div className="display-collection-cards">
            {products.map((p, i) => (
              // <ProductCard key={p._id} product={p} />
              <CollectionCard key={p._id} item={p} />
            ))}
          </div>
        </>
      ) : (
        <div className="mx-auto text-center">
          <Image
            width={400}
            height={400}
            className="mx-auto rounded-lg"
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
