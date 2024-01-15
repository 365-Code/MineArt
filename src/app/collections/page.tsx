"use client";
import Collection from "@/components/Collection";
import CollectionCard from "@/components/CollectionCard";
import { imgArray } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [scrollBy, setScrollBy] = useState<number>(100);

  const handleSlide = () => {
    const slideShow = document.getElementById("slide-show");

    if (slideShow) {
      slideShow.scroll(0, scrollBy + 100);
    }
  };

  useEffect(() => {
    const slideShow = document.getElementById("slide-show");
    if (slideShow) {
      slideShow.onscroll = () => setScrollBy(slideShow.scrollTop);
    }
  });

  return (
    <main id="slide-show">

      <section className="slide grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className=" flex w-full gap-2 flex-col justify-between">
          <div className="h-[450px]">
            <img src="/coll1.jpg" alt="" className="res-img" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">This is a product</h2>
            <p className="w-[450px] max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              consequatur cupiditate eaque alias, ipsa harum.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex w-full flex-col justify-between">
            <div className="h-[450px]">
              <img src="/coll2.jpg" alt="" className="res-img" />
            </div>
            <div>
            <h2 className="font-semibold text-lg">This is a product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, maxime expedita iure est numquam quo.</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="h-[450px]">
              <img src="/coll3.jpg" alt="" className="res-img" />
            </div>
            <div>
            <h2 className="font-semibold text-lg">This is a product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, maxime expedita iure est numquam quo.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Page;
