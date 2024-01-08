"use client";
import Carousal from "@/components/Carousal";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
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

  const images = [imgArray[0], imgArray[1], imgArray[2]];


  return (
    <main className="container1">
      <div className="container2 space-y-[5rem]">
        {/* Section 1 */}
        <section className="flex flex-col justify-between gap-8 md:h-[80vh] md:flex-row">
          <div className="relative h-full min-h-[350px] w-full md:basis-4/5 ">
            <div className="flex h-full min-h-[350px] w-full flex-col items-start justify-center gap-4 px-12">
              <p className="text-lg text-slate-500">Summer Sales Start</p>
              <h1 className="text-4xl font-semibold">
                Buy White Marble
                <br />
                Best Quality
              </h1>
            </div>
            <div className="absolute left-0 top-0 h-full w-full ">
              <Carousal images={images} />
            </div>
          </div>

          <div className="flex h-full flex-1 flex-col sm:flex-row md:flex-col items-center justify-center gap-8">
            <div className="img-hover-effect relative flex h-[350px] w-full flex-col justify-center overflow-hidden p-8 md:w-[350px]">
              <Image
          width="0"
          height="0"
          sizes="100vw"
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
                  href={`/products/pId2`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="img-hover-effect relative flex h-[350px] w-full flex-col justify-center overflow-hidden p-8 md:w-[350px]">
              <Image
          width="0"
          height="0"
          sizes="100vw"
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
                  href={`/products/pId3`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex items-center gap-4">
            <i className="fi fi-rs-rocket-lunch text-2xl" />
            <div>
              <h3>Fast Shipping</h3>
              <p className="text-sm font-semibold text-slate-400">
                India orders only
              </p>
            </div>
          </div>
          <hr className="max-h-full w-10 border border-slate-400 sm:h-10 sm:w-0" />
          <div className="flex items-center gap-4">
            <i className="fi fi-sr-user-headset text-2xl" />
            <div>
              <h3>Online 24/7 supports</h3>
              <p className="text-sm font-semibold text-slate-400">
                Sign up for gift
              </p>
            </div>
          </div>
          <hr className="max-h-full w-10 border border-slate-400 sm:h-10 sm:w-0" />
          <div className="flex items-center gap-4">
            <i className="fi fi-sr-truck-side text-2xl" />
            <div>
              <h3>Saftey Sure delivery</h3>
              <p className="text-sm font-semibold text-slate-400">
                Sign up for gift
              </p>
            </div>
          </div>
        </section>

        <hr />
        {/* Section 3 */}
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
            {
            productArray.length ?
            productArray.map((p, i) => (
              <ProductCard key={p._id} product={p} />
            ))
            :
            <ProductCardSkeleton/>
            }
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex w-full flex-col justify-between gap-2 overflow-hidden border border-black md:h-[80vh] md:flex-row">
          <div className="flex md:w-1/2 flex-col gap-2 ">
            <div className="relative flex min-h-[250px] flex-1 flex-col justify-center overflow-hidden p-8">
              <Image
          width="0"
          height="0"
          sizes="100vw"
                src={imgArray[6]}
                alt=""
                className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
              />
              <div>
                <h3 className="text-2xl text-white">
                  Dinner Ware
                  <br />
                  item
                </h3>
                <Link
                  href={"/products/pId7"}
                  className="text-sm font-semibold text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2 overflow-hidden sm:flex-row md:h-[250px]">
              <div className="relative flex h-[250px] max-h-full w-full flex-col justify-center overflow-hidden p-8 sm:w-[350px]">
                <Image
          width="0"
          height="0"
          sizes="100vw"
                  src={imgArray[7]}
                  alt=""
                  className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
                />
                <div>
                  <h3 className="text-2xl text-white">
                    Dinner Ware
                    <br />
                    item
                  </h3>
                  <Link
                    href={"/products/pId7"}
                    className="text-sm font-semibold text-pink-500 underline"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>

              <div className="relative flex h-[250px] max-h-full flex-col justify-center overflow-hidden p-8 sm:w-[350px]">
                <Image
          width="0"
          height="0"
          sizes="100vw"
                  src={imgArray[8]}
                  alt=""
                  className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
                />
                <div>
                  <h3 className="text-2xl text-white">
                    Dinner Ware
                    <br />
                    item
                  </h3>
                  <Link
                    href={"/products/pId7"}
                    className="text-sm font-semibold text-pink-500 underline"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:w-1/2 flex-col gap-2 ">
            <div className="flex flex-col gap-2 overflow-hidden sm:flex-row md:h-[250px]">
              <div className="relative flex h-[250px] max-h-full w-full flex-col justify-center overflow-hidden p-8 sm:w-[350px]">
                <Image
          width="0"
          height="0"
          sizes="100vw"
                  src={imgArray[7]}
                  alt=""
                  className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
                />
                <div>
                  <h3 className="text-2xl text-white">
                    Dinner Ware
                    <br />
                    item
                  </h3>
                  <Link
                    href={"/products/pId7"}
                    className="text-sm font-semibold text-pink-500 underline"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>

              <div className="relative flex h-[250px] max-h-full flex-col justify-center overflow-hidden p-8 sm:w-[350px]">
                <Image
          width="0"
          height="0"
          sizes="100vw"
                  src={imgArray[8]}
                  alt=""
                  className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
                />
                <div>
                  <h3 className="text-2xl text-white">
                    Dinner Ware
                    <br />
                    item
                  </h3>
                  <Link
                    href={"/products/pId7"}
                    className="text-sm font-semibold text-pink-500 underline"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[250px] flex-1 flex-col justify-center overflow-hidden p-8">
              <Image
          width="0"
          height="0"
          sizes="100vw"
                src={imgArray[6]}
                alt=""
                className="absolute left-0 top-0 -z-[2] h-full w-full object-cover object-center"
              />
              <div>
                <h3 className="text-2xl text-white">
                  Dinner Ware
                  <br />
                  item
                </h3>
                <Link
                  href={"/products/pId7"}
                  className="text-sm font-semibold text-pink-500 underline"
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
