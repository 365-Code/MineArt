"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {

  const [showSearch, setShowSearch] = useState(false);


  const pathname = usePathname();
  pathname.includes("/products");
  pathname.split("/");

  const onSearch = ()=>{
    console.log("Searching");
    setShowSearch(false)
  }

  return (
    <header
      id="header"
      key={"working"}
      className="container1 drop-shadow-xl text-center space-y-4 fixed left-0 top-0 z-10 w-full bg-white/30 transition-all backdrop:blur-sm"
    >
      <div className="container3 flex items-center justify-between">
        
        <Link href={"/"} className="text-2xl font-bold w-fit">
          MineArt
        </Link>
        <nav className="flex flex-col items-center gap-8 text-lg font-semibold absolute invisible md:visible md:relative md:flex-row">
          <Link
            href="/collections"
            className={`nav-link ${
              pathname.startsWith("/collections") && "nav-link-selected"
            } relative transition-all`}
          >
            collections
          </Link>
          <Link
            href="/products"
            className={`nav-link ${
              pathname.startsWith("/products") && "nav-link-selected"
            } relative transition-all`}
          >
            products
          </Link>
          <Link
            href="/about"
            className={`nav-link ${
              pathname.startsWith("/about") && "nav-link-selected"
            } relative transition-all`}
          >
            about
          </Link>
          <Link
            href="/services"
            className={`nav-link ${
              pathname.startsWith("/services") && "nav-link-selected"
            } relative transition-all`}
          >
            services
          </Link>
        </nav>

        <div className="flex gap-6 items-center">
          {/* <Link href={"/products"} className="transition-all"> */}
              <i onClick={()=> showSearch? setShowSearch(false): setShowSearch(true)} className="fi fi-rs-search icons"  />
          {/* </Link> */}
          <span className="flex gap-2 items-center cursor-pointer px-2 py-1 border border-black rounded-full hover:text-white hover:bg-slate-900">
            <i className="fi fi-rs-user icons" />
            <span>log in</span>
          </span>
          <i className="fi fi-rs-shopping-cart icons" />
        </div>
      </div>
      <div className={`${showSearch ? "h-10" : "h-0"} md:w-4/5 mx-auto flex items-center bg-white px-4 rounded-lg overflow-hidden transition-all`}>
        <i onClick={()=> showSearch? setShowSearch(false): setShowSearch(true)} className="fi fi-rs-search icons"  />
        <input onBeforeInput={()=> setShowSearch(false)} type="text" className="font-semibold text-lg w-full h-full py-2 px-6 rounded-lg transition-all" />
      </div>
    </header>
  );
};

export default Header;
