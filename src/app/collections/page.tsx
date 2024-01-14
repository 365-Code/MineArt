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

        <div id="c1s1thumbnail" className="in-slide grid grid-cols-2">
          <div className="h-full">
            <Image
              width={2000}
              height={1000}
              src={"/coll3.jpg"}
              alt="bowls"
              className=""
            />
          </div>

          <div className="flex flex-col items-center justify-center px-4">
            <h1 className="">this is a new </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ad
              corrupti officiis inventore, alias numquam hic eius facilis
              obcaecati laudantium unde eaque omnis neque totam in nemo vitae
              est sint?
            </p>
          </div>
        </div>

        <div
          id="c1S1"
          className="in-slide px-10"
        >
            <div className="h-full overflow-y-scroll no-scrollbar grid grid-cols-1 md:grid-cols-3">

              <div className="flex flex-col justify-between">
                <div className="p-4">
                  <h2 className="font-semibold">1. White bowls</h2>
                  <p>
                    This exquisite product features a stunning arrangement of
                    white bowls and delicate flowers. Crafted with meticulous
                    attention to detail, the bowls are made from high-quality
                    white marble, adding a touch of sophistication to any space.
                  </p>
                </div>
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
              </div>

              <div className="flex flex-col justify-between">
                <div className="p-4">
                  <h2 className="font-semibold">2. Glasses</h2>
                  <p>
                    The combination of the pure white color palette and the
                    intricate handicraft makes this piece a timeless addition to
                    your home decor, effortlessly blending beauty and
                    functionality.
                  </p>
                </div>
                <div className="space-y-4 px-4">
                  <h1 className="px-8 text-xl font-bold">/2</h1>
                  <div className="h-[400px] w-full overflow-hidden">
                    <Image
                      src={imgArray[0]}
                      width={800}
                      height={800}
                      alt="coll1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="p-4">
                  <h2 className="font-semibold">3. Cups</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt esse id quam eveniet corrupti sint accusantium non
                    harum quis officia.
                  </p>
                </div>
                <div className="space-y-4 px-4">
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
        </div>

        <div className="in-slide px-10">
          <div className="overflow-y-scroll no-scrollbar gap-4 h-full pb-4 grid grid-cols-1 md:grid-cols-2">

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col gap-4 justify-between">
                <div>
                <h2 className="text-lg font-bold pb-1">/4</h2>
                <div className="h-[350px] min-w-[120px]">
                  <Image width={500} height={500} src={'https://img.freepik.com/free-photo/wooden-bowl_74190-7008.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=ais'} alt="img1" />
                </div>
                </div>
                <div>
                  <h4 className="font-semibold">4. Wooden bowl</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus animi accusamus saepe earum accusantium ea?</p>
                </div>
              </div>
              <div className="md:pt-16 flex gap-4 flex-col justify-between">
                <div>
                <h2 className="text-lg font-bold pb-1">/5</h2>
                <div className="h-[350px] min-w-[120px]">
                  <Image width={500} height={500} src={'https://img.freepik.com/free-photo/empty-wooden-bowl-isolated-white-background_123827-19395.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=ais'} alt="img1" />
                </div>
                </div>
                <div>
                  <h3 className="font-semibold">5. Wooden bowl</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus animi accusamus saepe earum accusantium ea?</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 md:pt-3 flex-col justify-between">

              <div className="flex flex-col gap-4">
                <div>
                <h2 className="text-lg font-bold pb-1">/6</h2>
                <div className="w-full h-[220px]">
                  <Image width={500} height={500} src={'https://img.freepik.com/free-photo/set-beautiful-plates-pastel-colors-gray-background_169016-19114.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=ais'} alt="img" />
                </div>
                </div>
                <div>
                <h2 className="text-lg font-bold pb-1">/7</h2>
                <div className="w-full h-[220px]">
                  <Image width={500} height={500} src={'https://img.freepik.com/free-photo/top-view-eggs-easter-with-flowers-plate_23-2148844941.jpg?size=626&ext=jpg&ga=GA1.1.2058463804.1704785941&semt=ais'} alt="img" />
                </div>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold">3. Wooden bowl</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro explicabo nihil eveniet quas aliquam.</p>
                </div>
                <div>
                  <h3 className="font-semibold">4. Wooden bowl</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro explicabo nihil eveniet quas aliquam.</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      <section id="slide2" className="slide">
        <div id="c2St" className="in-slide grid grid-cols-2">
          <div className="h-full w-full -z-[2] absolute top-0 left-0">
            <Image
              width={2000}
              height={1000}
              src={"/coll2.jpg"}
              alt="bowls"
              className=""
            />
          </div>
          <div className="flex flex-col justify-center text-white px-10">
            <h1 className="text-2xl">This is a new </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ad
              corrupti officiis inventore, alias numquam hic eius facilis
              obcaecati laudantium unde eaque omnis neque totam in nemo vitae
              est sint?
            </p>
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
      </section>
      
      <div className='animate-bounce-h h-full flex justify-center items-center fixed top-0 right-0 p-2'>
      <i className="fi fi-rr-angle-right text-3xl" />
      </div>

      {/* <div className='bg-black/30 backdrop:blur-sm flex justify-center items-center fixed bottom-0 w-full p-2'>
      <i onClick={()=>handleSlide()} className="fi fi-rr-angle-down text-3xl" />
      </div> */}
    </main>
  );
};

export default Page;
