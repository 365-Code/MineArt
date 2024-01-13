import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const CloudinaryUpload = ({ setResource }: { setResource: any }) => {
  return (
    <div>
      <CldUploadWidget
        options={{ sources: ["local", "url", "unsplash"] }}
        signatureEndpoint="/api/sign-cloudinary-params"
        onSuccess={(result, { widget }) => {
          setResource(result?.info);
          widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            setResource(undefined);
            open();
          }
          return <button onClick={handleOnClick}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default CloudinaryUpload;
