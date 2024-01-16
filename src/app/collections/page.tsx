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

      <section id="slide1" className="slide grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-8">
        <div className=" flex w-full gap-2 flex-col justify-between">
          <div className="h-[450px]">
            <img src="/coll1.jpg" alt="" className="res-img" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Home Decor Set</h2>
            <p className="w-[450px] max-w-full">
            Introducing our elegant white shelf adorned with a captivating assortment of vases, perfect for adding a touch of sophistication to any space. Crafted with meticulous attention to detail, this versatile shelf offers a stylish and practical solution for displaying your cherished vases.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex w-full flex-col justify-between">
            <div className="h-[450px]">
              <img src="/coll2.jpg" alt="" className="res-img" />
            </div>
            <div>
            <h2 className="font-semibold text-lg">Coaster Set</h2>
            <p>Crafted with precision, these coasters are designed to protect your surfaces while adding a touch of sophistication to your home decor.</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="h-[450px]">
              <img src="/coll3.jpg" alt="" className="res-img" />
            </div>
            <div>
            <h2 className="font-semibold text-lg">Tablewares</h2>
            <p>Made from high-quality materials, its unique design resembles a fruit bowl, making it a versatile piece that can also be used as a decorative item in other areas of your home.  </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="slide2" className="slide grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-8">

        <div className=" flex w-full gap-2 flex-col justify-between">
          <div className="h-[450px]">
            <img src="/coll4.jpg" alt="" className="res-img" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Kitchen Set</h2>
            <p className="w-[450px] max-w-full">
            Crafted with attention to detail, this black vase doubles as a fruit bowl, making it a practical and stylish choice for your tableware collection.
            </p>
          </div>
        </div>

        <div className=" flex w-full gap-2 flex-col md:flex-col-reverse justify-between">
          <div className="h-[450px]">
            <img src="/coll5.jpg" alt="" className="res-img" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Bathroom Set</h2>
            <p className="w-[450px] max-w-full">
            This beautifully crafted table showcases a curated collection of items, including candles, bottles, and towels, adding a touch of sophistication to your home decor
            </p>
          </div>
        </div>
      </section>
      
      <section id="slide3" className="slide grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-8">

        <div className=" flex w-full gap-2 flex-col justify-between">
          <div className="h-[450px]">
            <img src="/coll6.jpg" alt="" className="res-img" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Sugar Salt Containter</h2>
            <p className="w-[450px] max-w-full">This beautifully crafted table showcases a curated collection of items, including candles, bottles, and towels, adding a touch of sophistication to your home decor
            </p>
          </div>
        </div>

        <div className=" flex w-full gap-2 flex-col justify-between">
          <div className="h-[450px]">
            <img src="/coll7.jpg" alt="" className="res-img" />
          </div>
          <div className="">
            <h2 className="text-lg font-semibold">Candle Stand</h2>
            <p className="w-[450px] max-w-full">The contrasting black and white marble design adds a touch of modernity, while the sturdy construction ensures durability and stability.
            </p>
          </div>
        </div>
        
        <div className=" flex w-full gap-2 flex-col justify-between">
          <div className="h-[450px]">
            <img src="/coll8.jpg" alt="" className="res-img" />
          </div>
          <div className="">
            <h2 className="text-lg font-semibold">Chess Board Set</h2>
            <p className="w-[450px] max-w-full">Our exquisite marble chess board with black and white pieces, a perfect blend of elegance and strategy. Crafted from high-quality marble, this board showcases a timeless design that will enhance any setting
            </p>
          </div>
        </div>
        
        <div className=" flex w-full gap-2 flex-col justify-between">
          <div className="h-[450px]">
            <img src="/coll9.jpg" alt="" className="res-img" />
          </div>
          <div className="">
            <h2 className="text-lg font-semibold">Marble Plates</h2>
            <p className="w-[450px] max-w-full"> Crafted with precision, this set features stunning marble plates that add a touch of sophistication to any dining experience.
            </p>
          </div>
        </div>

      </section>
      
      <section id="slide4" className="slide grid grid-cols-1 md:grid-rows-2 sm:grid-cols-2 gap-4 p-4 sm:p-8">

        
      <div className="flex h-fit sm:h-auto flex-col md:flex-row items-center gap-2">
        <div className="h-[350px] max-h-full w-full md:w-1/2">
          <img src="/coll10.jpg" alt="" className="res-img" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold">This is a product</h2>
          <p className="max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            consequatur cupiditate eaque alias, ipsa harum.
          </p>
        </div>
      </div>
      
      <div className="flex h-fit sm:h-auto flex-col md:flex-row items-center gap-2">
        <div className="h-[350px] max-h-full w-full md:w-1/2">
          <img src="/coll11.jpg" alt="" className="res-img" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold">This is a product</h2>
          <p className="max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            consequatur cupiditate eaque alias, ipsa harum.
          </p>
        </div>
      </div>
      
      <div className="flex h-fit sm:h-auto flex-col md:flex-row items-center gap-2">
        <div className="h-[350px] max-h-full w-full md:w-1/2">
          <img src="/coll12.jpg" alt="" className="res-img" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold">This is a product</h2>
          <p className="max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            consequatur cupiditate eaque alias, ipsa harum.
          </p>
        </div>
      </div>
      
      <div className="flex h-fit sm:h-auto flex-col md:flex-row items-center gap-2">
        <div className="h-[350px] max-h-full w-full md:w-1/2">
          <img src="/coll13.jpg" alt="" className="res-img" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold">This is a product</h2>
          <p className="max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            consequatur cupiditate eaque alias, ipsa harum.
          </p>
        </div>
      </div>


      </section>

      <section id="slide5" className="slide grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex w-full flex-col justify-between">
            <div className="h-[450px]">
              <img src="/coll14.jpg" alt="" className="res-img" />
            </div>
            <div>
            <h2 className="font-semibold text-lg">Coaster Set</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, maxime expedita iure est numquam quo.</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="h-[450px]">
              <img src="/coll15.jpg" alt="" className="res-img" />
            </div>
            <div>
            <h2 className="font-semibold text-lg">Tablewares</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, maxime expedita iure est numquam quo.</p>
            </div>
          </div>
        </div>
        <div className=" flex w-full gap-2 flex-col justify-between">
          <div className="h-[450px]">
            <img src="/coll16.jpg" alt="" className="res-img" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Home Decor</h2>
            <p className="w-[450px] max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              consequatur cupiditate eaque alias, ipsa harum.
            </p>
          </div>
        </div>
      </section>

      <section id="slide6" className="slide grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-8">
        
        <div className="flex flex-col gap-2">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

            <div className="h-[300px] relative p-4">
              <img src="/coll17.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            <div className="h-[300px] relative p-4">
              <img src="/coll18.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            
          </div>
          
          
          <div className="">

            <div className="h-[300px]  relative p-4">
              <img src="/coll19.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            
          </div>

        </div>
        
        <div className="flex flex-col-reverse gap-2">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

            <div className="h-[300px] relative p-4">
              <img src="/coll20.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            <div className="h-[300px] relative p-4">
              <img src="/coll21.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            
          </div>
          
          
          <div className="">

            <div className="h-[300px]  relative p-4">
              <img src="/coll22.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            
          </div>

        </div>
 
      </section>

      <section id="slide7" className="slide grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-8">
        
        <div className="grid grid-cols-2 gap-2">
          
            <div className="h-full min-h-[300px] flex flex-col justify-center relative p-4">
              <img src="/coll23.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            
            <div className="h-full min-h-[300px] flex flex-col justify-center relative p-4">
              <img src="/coll24.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>

        </div>
        
        <div className="flex flex-col gap-2">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

            <div className="h-[300px] relative p-4">
              <img src="/coll25.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            <div className="h-[300px] relative p-4">
              <img src="/coll26.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            
          </div>
          
          
          <div className="">

            <div className="h-[300px]  relative p-4">
              <img src="/coll27.jpg" alt="" className="-z-[1] absolute top-0 left-0 res-img" />
              <div>
                <h1>This is a products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, at natus veritatis nesciunt illum similique? Totam voluptates iste aliquam deserunt.</p>
              </div>
            </div>
            
          </div>

        </div>
 
      </section>
      

    </main>
  );
};

export default Page;
