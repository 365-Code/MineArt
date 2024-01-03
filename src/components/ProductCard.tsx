import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <div className="group/product h-auto w-[320px] space-y-2 overflow-hidden">
        <div className="relative h-[300px]">
          <Link href={`/products/${product.id}`}>
            <img
              src={product.img}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </Link>
          <div className="invisible absolute right-4 top-4 space-y-2 group-hover/product:visible">
            <i className="fi fi-sr-shopping-cart-add cursor-pointer rounded-lg bg-white p-2 transition-all hover:bg-slate-900 hover:text-white" />
            <i className="fi fi-rr-eye cursor-pointer rounded-lg bg-white p-2 transition-all hover:bg-slate-900 hover:text-white" />
            <i className="fi fi-rs-heart cursor-pointer rounded-lg bg-white p-2 transition-all hover:bg-slate-900 hover:text-white" />
            {/* <i className="fi fi-rr-zoom-in cursor-pointer rounded-lg bg-white p-2 transition-all hover:bg-slate-900 hover:text-white" /> */}
          </div>
        </div>
        {/* <div className='flex justify-between items-end'> */}
        <div>
          <h3 className="text-nowrap text-lg font-semibold">{product.title}</h3>
          <p className="text-base ">Rs.{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
