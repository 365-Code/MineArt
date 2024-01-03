import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <div className="h-auto w-[320px] space-y-2 overflow-hidden">
        <div className="h-[300px]">
          <img
            src={product.img}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className="text-nowrap text-lg font-bold  ">{product.title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">Rs.{product.price}</p>
            <div className="flex items-center gap-2 mx-2">
              <i className="fi fi-sr-shopping-cart-add rounded-full cursor-pointer p-3 text-lg hover:bg-slate-900 hover:text-white transition-all" />
              <Link href={`/products/${product.id}`} className="group/view flex items-center gap-1">
                Details{" "}
                <i className="fi fi-rs-arrow-small-right group-hover/view:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
