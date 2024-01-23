"use client";
import React, { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const CloudinaryUpload = ({
  setResource,
  resource,
}: {
  setResource?: any;
  resource: Array<object>;
}) => {
  let imgArray = [] as Array<object>;

  return (
    <div className="z-30">
      <CldUploadWidget
        options={{ sources: ["local", "url", "unsplash"] }}
        signatureEndpoint="/api/sign-cloudinary-params"
        uploadPreset="mineArt_preset"
        onSuccess={(result, { widget }) => {
          imgArray.push(result?.info as object);
          setResource([...resource, ...imgArray]);
          imgArray = []
          // setResource(result?.info);
          // widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            setResource(undefined);
            open();
          }
          return (
            <button
            id="cld-upload"
              onClick={handleOnClick}
              className="flex h-[102px] min-h-[102px] w-[102px] min-w-[102px] cursor-pointer items-center justify-center rounded-lg bg-gray-400 hover:bg-gray-500 "
            >
              <svg
                height={80}
                width={80}
                viewBox="0 0 25 25"
                fill="none"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M18.5 7.5H20.5V19.5H6.5V17.5M4.5 14.5L7.79289 11.2071C8.18342 10.8166 8.81658 10.8166 9.20711 11.2071L11.8867 13.8867C12.2386 14.2386 12.7957 14.2782 13.1938 13.9796L14.1192 13.2856C14.3601 13.1049 14.6696 13.0424 14.9618 13.1154L18.5 14M4.5 5.5H18.5V17.5H4.5V5.5ZM14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.9477 8.5 13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5Z"
                    stroke="#ffffff"
                    stroke-width="0.375"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default CloudinaryUpload;
