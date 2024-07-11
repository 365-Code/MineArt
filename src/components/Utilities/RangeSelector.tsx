"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const RangeSelector = ({ min, steps, max }: { min?: number, steps?: number, max: number }) => {
  const [price, setPrice] = useState(0);
  let priceRef = useRef()

  const handlePrice = (e: ChangeEvent<HTMLInputElement>)=>{
    const value = Number(e.target.value)
    setPrice(value)
    const priceSelector = document.getElementById("price-selector");
    const rangePrice = document.getElementById("range-price");
    if (priceSelector) {
      priceSelector.oninput = function () {
        if (rangePrice) {
          const rate = (value - (min || 0)) / (max - (min || 0));
          rangePrice.style.left = rate * 100 + "%";
        }
      };
    }
  }

  // useEffect(() => {
  //   const priceSelector = document.getElementById("price-selector");
  //   const rangePrice = document.getElementById("range-price");
  //   if (priceSelector) {
  //     priceSelector.oninput = function () {
  //       if (rangePrice) {
  //         const rate = (price - (min || 0)) / (max - (min || 0));
  //         rangePrice.style.left = rate * 100 + "%";
  //       }
  //     };
  //   }
  // }, [price]);

  return (
    <div className="relative flex items-center max-w-full">
      <input
        type="range"
        id="price-selector"
        value={price}
        min={0}
        max={max}
        step={steps || 1}
        onChange={handlePrice}
        className="w-[400px] max-w-full"
      />
      <span id="range-price" className="absolute top-full translate-y-2 transition-none font-semibold">&#x20b9;{price}</span>
    </div>
  );
};

export default RangeSelector;