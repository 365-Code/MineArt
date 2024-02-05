"use client";
import Carousal from "@/components/Carousal";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { ProductType } from "@/redux/features/productSlice";
import { imgArray, productArray } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {



  const scrollFeatured = (n: number) => {
    const ft = document.getElementById("featured");

    ft && ft.scrollLeft >= 1280 ? ft?.scrollTo(0, 0) : ft?.scrollBy(50 * n, 0);
  };

  const [products, setProducts] = useState(Array<ProductType>);

  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/getAllProducts");
      const res = await result.json();
      if (res.success) {
        setProducts(res.products.slice(0, 10));
      }
      return res.products;
    } catch (error) {
      return error;
    }
  };

  useEffect(()=>{
    fetchAllProducts()
  }, [])

  const images = ['/coll13.jpg', '/coll18.jpg', '/coll6.jpg'];

  return (
    <main className="container1">
      <div className="container2 space-y-[5rem]">
        {/* Section 1 */}
        <section className="flex flex-col justify-between gap-8 md:h-[80vh] md:flex-row">
          <div className="relative h-full min-h-[350px] w-full md:basis-4/5 ">
            <div className="absolute w-full h-full flex flex-col justify-center gap-4 px-12">
              <div className="bg-black/40 p-4 sm:py-6 md:py-8 w-fit h-fit">
              {/* <p className="text-lg fonsem text-white underline underline-offset-2">Summer Sales Start</p> */}
              <h1 className="text-2xl text-white sm:text-3xl md:text-5xl mix-blend-lighten font-semibold">
                Buy White Marble
                <br />
                Best Quality
              </h1>
              </div>
            </div>
            <div className="absolute left-0 top-0 h-full w-full ">
              <Carousal images={images} />
            </div>
          </div>

          <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 sm:flex-row md:flex-col">
            <div className="img-hover-effect relative flex h-[350px] w-full flex-col justify-center overflow-hidden p-8 md:w-[350px]">
              <Image
                width={400}
                height={400}
                src={imgArray[1]}
                alt=""
                className="home-img"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold mix-blend-darken">
                  Vases Items
                </h3>
                <Link
                  href={`/collections/vase`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="img-hover-effect relative flex h-[350px] w-full flex-col justify-center overflow-hidden p-8 md:w-[350px]">
              <Image
                width={400}
                height={400}
                src={imgArray[2]}
                alt=""
                className="object-contain home-img"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                  Kitchen
                  <br />
                  Containers
                </h3>
                <Link
                  href={`/collections/kitchen`}
                  className="text-sm text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
        <hr />
        {/* Section 2 */}
        <section className="flex flex-col items-center justify-center gap-8 sm:flex-row">
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
            <h3 className="w-fit cursor-pointer border p-4 hover:bg-pink-500 hover:text-white">
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
            // className="no-scrollbar flex w-screen max-w-full items-center gap-4 overflow-x-scroll"
            className="no-scrollbar flex max-w-fit gap-4 overflow-x-scroll"
          > 
            {products.length != 0 ? (
              products.map((p, i) => (
                <ProductCard key={p._id} product={p} showDet={false}/>
              ))
            ) : (
              [...Array(5)].map((a, i) => 
              <ProductCardSkeleton />
              )
            )}
          </div>
        </section>
        <hr />
        {/* Section 4 */}
        <section className="flex w-full flex-col justify-between gap-2 overflow-hidden md:h-[80vh] md:flex-row">
          <div className="flex flex-col gap-2 md:w-1/2 ">
            <div className="relative flex min-h-[250px] flex-1 flex-col justify-center overflow-hidden p-8">
              <Image
                width={400}
                height={400}
                src={imgArray[6]}
                alt=""
                className="home-img"
              />
              <div>
                  <h3 className="text-2xl text-white mix-blend-luminosity">
                  Big Vases
                  <br />
                  item
                </h3>
                <Link
                  href={"/collections/vase"}
                  className="text-sm font-semibold text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2 overflow-hidden sm:flex-row md:h-[250px]">
              <div className="relative flex h-[250px] max-h-full w-full flex-col justify-center overflow-hidden p-8 sm:w-[350px]">
                <Image
                  width={400}
                  height={400}
                  src={imgArray[7]}
                  alt=""
                  className="home-img"
                />
                <div>
                  <h3 className="text-2xl text-white mix-blend-exclusion">
                    Decorative
                    <br />
                    item
                  </h3>
                  <Link
                    href={"/collections/decors"}
                    className="text-sm font-semibold text-pink-500 underline"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>

              <div className="relative flex h-[250px] max-h-full flex-col justify-center overflow-hidden p-8 sm:w-[350px]">
                <Image
                  width={400}
                  height={400}
                  src={imgArray[8]}
                  alt=""
                  className="home-img"
                />
                <div>
                  <h3 className="text-2xl text-white mix-blend-lighten">
                    Decor
                    <br />
                    items
                  </h3>
                  <Link
                    href={"/collections/decors"}
                    className="text-sm font-semibold text-pink-500 underline"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:w-1/2 ">
            <div className="flex flex-col gap-2 overflow-hidden sm:flex-row md:h-[250px]">
              <div className="relative flex h-[250px] max-h-full w-full flex-col justify-center overflow-hidden p-8 sm:w-[350px]">
                <Image
                  width={400}
                  height={400}
                  src={'/coll6.jpg'}
                  alt=""
                  className="home-img"
                />
                <div>
                  <h3 className="text-2xl text-white mix-blend-exclusion">
                    Sugar N Salt
                    <br />
                    Containers
                  </h3>
                  <Link
                    href={"/collections/kitchen"}
                    className="text-sm font-semibold text-pink-500 underline"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>

              <div className="relative flex h-[250px] max-h-full flex-col justify-center overflow-hidden p-8 sm:w-[350px]">
                <Image
                  width={400}
                  height={400}
                  src={'/coll7.jpg'}
                  alt=""
                  className="home-img"
                />
                <div>
                  <h3 className="text-2xl text-black mix-blend-color-">
                    Candle Stands
                  </h3>
                  <Link
                    href={"/collections/candle-stand"}
                    className="text-sm font-semibold text-pink-500 underline"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[250px] flex-1 flex-col justify-center overflow-hidden p-8">
              <Image
                width={400}
                height={400}
                src={'/coll12.jpg'}
                alt=""
                className="home-img"
              />
              <div>
                <h3 className="text-2xl text-white">
                  Table ware
                  <br />
                  item
                </h3>
                <Link
                  href={"/collections/tableware"}
                  className="text-sm font-semibold text-pink-500 underline"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
        <hr />
        {/* Section 5 */}
        <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d342.50421379484084!2d74.7266009351273!3d27.049602890133876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b9da5cd2d0495%3A0x5c6d53a27ef2fb1f!2sMine%20Art!5e0!3m2!1sen!2sin!4v1705638829958!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="max-w-full"
            />
        <div className="space-y-2 max-w-full w-[500px]">
          <div>
              <h1 className="font-semibold text-3xl">Visit our store at</h1>
              <p className="w-[250px] max-w-full"><span className="font-semibold text-xl">MineArt :</span>{" "}Taj gali, road, Mathabhar, Makrana, Rajasthan 341505</p>
          </div>
              <div>
                <h3 className="text-2xl">Contact Us</h3>
                <div className="bg-white p-2 rounded-lg flex flex-col gap-2 ">
                  <textarea name="message" id="" className="no-scrollbar w-full rounded-lg resize-none p-4 h-[150px]" placeholder="Enter Your Message" />
                  <button className="px-4 py-2 ml-auto w-fit rounded-lg bg-blue-400 hover:bg-blue-500 text-white flex items-center gap-2">Send <span><i className="fi fi-sr-paper-plane-top" /></span> </button>
                </div>
              </div>
        </div>
      </section>

      </div>

    </main>
  );
}
