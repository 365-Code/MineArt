"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const Carousal = ({ images }: { images: Array<StaticImageData> }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative flex h-full w-full">
      {images.map((image, i) => (
        <div key={i} className={`-z-[2] h-full overflow-hidden max-w-full transition-all ${selected == i ? "w-screen opacity-100": "w-0 opacity-0" }`}>
          <Image
            width={800}
            height={800}
            src={image}
            alt=""
            className={`-z-[2] h-full w-full object-cover object-center transition-all `}
          />
        </div>
      ))}
      <i
        onClick={() => setSelected( (selected - 1) != -1 ? (selected - 1) :  images.length-1 )}
        className="fi fi-rs-angle-left icons absolute left-4 top-1/2 -translate-y-1/2 hover:text-pink-500"
      />
      <i
        onClick={() => setSelected((selected + 1) % images.length)}
        className="fi fi-rs-angle-right icons absolute right-4 top-1/2 -translate-y-1/2 hover:text-pink-500"
      />
      <div className="absolute bottom-8 -z-[3] flex gap-4 justify-center w-full"> 
      {images.map((image, i) => (
          <span key={i} className={`h-4 w-4 transition-all rounded-full border border-pink-500 hover:bg-pink-500 ${selected == i && "bg-pink-500"}`} />
          ))}
      </div>

    </div>
  );
};

export default Carousal;
