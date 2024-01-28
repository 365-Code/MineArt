"use client";
import React, { useEffect } from "react";

const AskPrompt = ({
  title,
  show,
  handle,
  setShow,
  type,
}: {
  title: string;
  show: any;
  handle: any;
  setShow: any;
  type: string;
}) => {
  useEffect(() => {
    const main = document.getElementById("main");
    if (main) {
      main.onclick = () => {
        setShow(false);
      };
    }
  });

  return (
    <div
      className={`${
        show ? "visible fixed top-4 translate-y-0" : "invisible absolute -top-4"
      } left-1/2 z-[30] h-fit w-[300px] -translate-x-1/2 -translate-y-full space-y-2 rounded-lg bg-[#f5f5f5] p-4 shadow-sm shadow-black/30 transition-all`}
    >
      <h1 className="text-left text-base font-semibold capitalize">
        {title} &#63;
      </h1>
      
      <div className="space-x-2 text-right">
        <button
          onClick={handle}
          className={`px-2 py-1 ${
            type == "red" && "bg-red-500 hover:bg-red-600"
          } ${
            type == "blue" && "bg-blue-500 hover:bg-blue-600"
          } rounded-lg px-4 py-1 text-white`}
        >
          Yes
        </button>
        <button
          onClick={() => setShow(false)}
          className={`${
            type == "red" && "hover:bg-slate-300"
          } rounded-lg border border-black px-4 py-1`}
        >
          No
        </button>
      </div>

    </div>
  );
};

export default AskPrompt;
