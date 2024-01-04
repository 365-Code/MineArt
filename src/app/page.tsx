"use client";
import Modal from "@/components/Modal";
import Product from "@/components/Product";
import ProductCard from "@/components/ProductCard";
import { imgArray, productArray } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollFeatured = (n: number) => {
    const ft = document.getElementById("featured");
    if (ft) {
      ft.scrollLeft > 2000 ? ft.scrollTo(0, 0) : ft.scrollBy(50 * n, 0);
    }
  };

  return (
    <main className="container1">
      <div className="container2 space-y-12">
        <section className="flex h-[75vh] justify-between gap-8">
          <div className="relative h-full w-full md:w-4/5">
            <div className="flex h-full w-full flex-col items-start justify-center gap-4 px-12">
              <p className="text-lg text-slate-500">Summer Sales Start</p>
              <h1 className="text-4xl font-semibold">
                Buy White Marble
                <br />
                Best Quality
              </h1>
            </div>
            <img
              src={imgArray[0]}
              alt=""
              className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex h-full flex-1 flex-col gap-8">
            <div className="img-hover-effect relative flex h-[350px] w-[350px] flex-col justify-center overflow-hidden p-8">
              <img
                src={imgArray[1]}
                alt=""
                className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Dinner Wear
                  <br />
                  Items
                </h3>
                <Link
                  href={`/products/new`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="img-hover-effect relative flex h-[350px] w-[350px] flex-col justify-center overflow-hidden p-8">
              <img
                src={imgArray[2]}
                alt=""
                className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  New Serving
                  <br />
                  Plate
                </h3>
                <Link
                  href={`/products/new`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="flex items-center justify-between">
            <h3 className="w-fit cursor-pointer border p-4 hover:bg-pink-500">
              Featured
            </h3>
            <div className="flex items-center gap-4">
              <button onClick={() => scrollFeatured(-10)}>
                <i className="fi fi-rs-arrow-left icons" />
              </button>
              <button onClick={() => scrollFeatured(10)}>
                <i className="fi fi-rs-arrow-right icons" />
              </button>
            </div>
          </div>

          <div
            id="featured"
            className="no-scrollbar flex max-w-full items-center gap-4 overflow-x-scroll"
          >
            {productArray.map((p, i) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section className="flex h-[80vh] w-full justify-between gap-4">
          <div className="flex basis-1/2 flex-col gap-4 h-full overflow-hidden">
            <div className="flex flex-col justify-center items-start p-8 relative w-full h-full overflow-hidden">
              <img
                src={imgArray[3]}
                alt=""
                className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Dinner Wear
                  <br />
                  Items
                </h3>
                <Link
                  href={`/products/new`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="flex h-[350px] gap-4 overflow-hidden">
              <div className="flex flex-col justify-center items-start p-8 relative h-full w-[350px] overflow-hidden">
                <img
                  src={imgArray[9]}
                  alt=""
                  className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
                />
                <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Dinner Wear
                  <br />
                  Items
                </h3>
                <Link
                  href={`/products/new`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
              </div>
              <div className="flex flex-col justify-center items-start p-8 relative h-full w-[350px] overflow-hidden">
                <img
                  src={imgArray[5]}
                  alt=""
                  className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
                />
                <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Dinner Wear
                  <br />
                  Items
                </h3>
                <Link
                  href={`/products/new`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
              </div>
            </div>
          </div>

          <div className="flex basis-1/2 flex-col gap-4 overflow-hidden">
            <div className="flex h-[350px] gap-4 overflow-hidden">
              <div className="flex flex-col justify-center items-start p-8 relative h-full w-[350px] overflow-hidden">
                <img
                  src={imgArray[6]}
                  alt=""
                  className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
                />
                <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Dinner Wear
                  <br />
                  Items
                </h3>
                <Link
                  href={`/products/new`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
                
              </div>
              <div className="flex flex-col justify-center items-start p-8 relative h-full w-[350px] overflow-hidden">
                <img
                  src={imgArray[7]}
                  alt=""
                  className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
                />
                <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Dinner Wear
                  <br />
                  Items
                </h3>
                <Link
                  href={`/products/new`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
                
              </div>
            </div>
            <div className="flex flex-col justify-center items-start p-8 relative h-full overflow-hidden">
              <img
                src={imgArray[8]}
                alt=""
                className="absolute left-0 top-0 -z-[2] h-full w-full flex-1 object-cover object-center"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Dinner Wear
                  <br />
                  Items
                </h3>
                <Link
                  href={`/products/new`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
