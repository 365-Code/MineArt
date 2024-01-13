"use client";
import CSlide from "@/components/CSlide";
import { imgArray } from "@/utils";
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
      <CSlide slide={{thumbnail: '/coll1.jpg', title:'Bathroom Set'}}/>
      <CSlide slide={{thumbnail: '/coll2.jpg', title:'Decorative Items'}}/>
      <CSlide slide={{thumbnail: '/coll1.jpg', title:'Decorative Items'}}/>
      <CSlide slide={{thumbnail: '/coll2.jpg', title:'Decorative Items'}}/>
      <CSlide slide={{thumbnail: '/coll1.jpg', title:'Decorative Items'}}/>

      {/* <div className='bg-black/30 backdrop:blur-sm flex justify-center items-center fixed bottom-0 w-full p-2'>
      <i onClick={()=>handleSlide()} className="fi fi-rr-angle-down text-3xl" />
      </div> */}

      
    </main>
  );
};

export default Page;
