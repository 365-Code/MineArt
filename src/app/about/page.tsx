import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="container1 text-center text-2xl space-y-4 w-[900px] mx-auto">
      <h1 className="text-3xl">
        About <span className="font-semibold">MineArt</span>
      </h1>
      <p>
        Welcome to <span className="font-semibold">MineArt</span> where we share
        information related to Handicraft. We&apos;re dedicated to providing you the
        very best information and knowledge of the above mentioned topics.
      </p>

      <p>
        We hope you found all of the information on <span className="font-semibold">MineArt</span> helpful, as
        we love to share them with you.
      </p>

      <p>
        If you require any more information or have any questions about our
        site, please feel free to contact us by email at <span className="font-semibold">bfurn@gmail.com</span>.
      </p>
    </div>
  );
};

export default Page;
