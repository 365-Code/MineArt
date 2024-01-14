"use client";
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


      <section id="slide1" className="slide">
        
        <div id="c1St" className="in-slide grid grid-cols-2">
          <div className="h-full">
            <Image width={500} height={500} src={'/coll1.jpg'} alt="bowls" className=""/>
          </div>
          <div className="flex items-center justify-center px-4">
            <h1>this is a new </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ad corrupti officiis inventore, alias numquam hic eius facilis obcaecati laudantium unde eaque omnis neque totam in nemo vitae est sint?</p>
          </div>
        </div>
        
        <div
          id="c1S1"
          className="in-slide flex flex-col justify-between px-10 "
        >
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-4">
                <h2 className="font-semibold">1. White bowls</h2>
                <p>
                  This exquisite product features a stunning arrangement of
                  white bowls and delicate flowers. Crafted with meticulous
                  attention to detail, the bowls are made from high-quality
                  white marble, adding a touch of sophistication to any space.
                </p>
              </div>

              <div className="p-4">
                <h2 className="font-semibold">2. Glasses</h2>
                <p>
                  The combination of the pure white color palette and the
                  intricate handicraft makes this piece a timeless addition to
                  your home decor, effortlessly blending beauty and
                  functionality.
                </p>
              </div>
              <div className="py-4 pl-12">
              <h2 className="font-semibold">3. Cups</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt esse id quam eveniet corrupti sint accusantium non
                harum quis officia.
              </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="space-y-4 px-4">
              <h1 className="px-8 text-xl font-bold">/1</h1>
              <div className="h-[400px] w-full overflow-hidden">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/monochromatic-still-life-composition-with-white-bowls_23-2148869766.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=ais"
                  }
                  width={800}
                  height={800}
                  alt="coll1"
                />
              </div>
            </div>

            <div className="space-y-4 px-4">
              <h1 className="px-8 text-xl font-bold">/2</h1>
              <div className="h-[400px] w-full overflow-hidden">
                <Image src={imgArray[0]} width={800} height={800} alt="coll1" />
              </div>
            </div>

            <div className="space-y-4 pl-12">
              <h1 className="px-8 text-xl font-bold">/3</h1>
              <div className="h-[400px] w-full overflow-hidden">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/side-view-straight-shaped-blank-white-simple-coffee-cups-pyramide-thick-wooden-table-isolated_346278-1400.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=ais"
                  }
                  width={800}
                  height={800}
                  alt="coll1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="in-slide">
          <img src={imgArray[1]} alt="" />
        </div>

        <div className="in-slide">
          <img src={imgArray[2]} alt="" />
        </div>
        
        <div className='flex justify-center items-center fixed top-0 right-0 h-full p-2'>
          <i className="fi fi-rr-angle-right text-3xl" />
        </div>
      </section>

      
      <section id="slide2" className="slide">
        
        <div id="c2St" className="in-slide grid grid-cols-2">
          <div className="h-full">
            <Image width={500} height={500} src={'/coll2.jpg'} alt="bowls" className=""/>
          </div>
          <div className="flex items-center justify-center px-4">
            <h1>this is a new </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ad corrupti officiis inventore, alias numquam hic eius facilis obcaecati laudantium unde eaque omnis neque totam in nemo vitae est sint?</p>
          </div>
        </div>
        
        <div
          id="c1S1"
          className="in-slide flex flex-col justify-between px-10 "
        >
          <div>
            <div className="grid grid-cols-3">
              <div className="p-4">
                <h2 className="font-semibold">1. White bowls</h2>
                <p>
                  This exquisite product features a stunning arrangement of
                  white bowls and delicate flowers. Crafted with meticulous
                  attention to detail, the bowls are made from high-quality
                  white marble, adding a touch of sophistication to any space.
                </p>
              </div>

              <div className="p-4">
                <h2 className="font-semibold">2. Glasses</h2>
                <p>
                  The combination of the pure white color palette and the
                  intricate handicraft makes this piece a timeless addition to
                  your home decor, effortlessly blending beauty and
                  functionality.
                </p>
              </div>
              <p className="py-4 pl-12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt esse id quam eveniet corrupti sint accusantium non
                harum quis officia.
              </p>
            </div>
            <hr />
          </div>
          <div className="grid grid-cols-3">
            <div className="space-y-4 px-4">
              <h1 className="px-8 text-xl font-bold">/1</h1>
              <div className="h-[400px] w-full overflow-hidden">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/monochromatic-still-life-composition-with-white-bowls_23-2148869766.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=ais"
                  }
                  width={800}
                  height={800}
                  alt="coll1"
                />
              </div>
            </div>

            <div className="space-y-4 px-4">
              <h1 className="px-8 text-xl font-bold">/2</h1>
              <div className="h-[400px] w-full overflow-hidden">
                <Image src={imgArray[0]} width={800} height={800} alt="coll1" />
              </div>
            </div>

            <div className="space-y-4 pl-12">
              <h1 className="px-8 text-xl font-bold">/3</h1>
              <div className="h-[400px] w-full overflow-hidden">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/side-view-straight-shaped-blank-white-simple-coffee-cups-pyramide-thick-wooden-table-isolated_346278-1400.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=ais"
                  }
                  width={800}
                  height={800}
                  alt="coll1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="in-slide">
          <img src={imgArray[1]} alt="" />
        </div>

        <div className="in-slide">
          <img src={imgArray[2]} alt="" />
        </div>
        
        <div className='flex justify-center items-center fixed top-0 right-0 h-full p-2'>
          <i className="fi fi-rr-angle-right text-3xl" />
        </div>
      </section>
      
      {/* <div className='bg-black/30 backdrop:blur-sm flex justify-center items-center fixed bottom-0 w-full p-2'>
      <i onClick={()=>handleSlide()} className="fi fi-rr-angle-down text-3xl" />
      </div> */}
    </main>
  );
};

export default Page;
