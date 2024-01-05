"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideCart from "./SideCart";
import { cartArray } from "@/utils";

const Header = () => {

  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);


  const pathname = usePathname();
  pathname.includes("/products");
  pathname.split("/");

  const onSearch = ()=>{
    console.log("Searching");
    setShowSearch(false)
  }

  useEffect(()=>{
    const main = document.getElementById('main')
    if(main){
      main.onclick = ()=>{
        setShowSearch(false)
        setShowCart(false)
    }
  }
  }, [showSearch, setShowSearch])

  const toggleSearch = ()=>{
    showSearch? 
    setShowSearch(false): 
    setShowSearch(true)
  }
  
  const toggleCart = ()=>{
    showCart? 
    setShowCart(false): 
    setShowCart(true)
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
              <i onClick={toggleSearch} className="fi fi-rs-search icons hover:rotate-12"  />
          <Link href={'/auth/login'} className="flex gap-2 items-center cursor-pointer px-3 py-2 border border-black rounded-full hover:text-white hover:bg-slate-900">
            <i className="fi fi-rs-user icons" />
            <span>log in</span>
          </Link>
          {/* <Link href={"/cart"}> */}
          <span className="flex items-center gap-1">
            <i onClick={toggleCart} className="fi fi-rs-shopping-cart icons" />
            <span className="flex items-center justify-center font-bold text-white text-xs h-5 w-5 rounded-full bg-pink-500">{0 || cartArray.length}</span>
          </span>
            <div className={`${showCart ? "translate-x-0 visible" : "translate-x-full invisible"} absolute top-full right-0 transition-all w-[400px]`}>
              <SideCart/>
            </div>
          {/* </Link> */}
        </div>
      </div>
      <div className={`${showSearch ? "h-10" : "h-0"} absolute top-full md:w-4/5 mx-auto flex items-center bg-white px-4 rounded-lg overflow-hidden transition-all`}>
        <i className="fi fi-rs-search icons"/>
        <input onBlur={()=> setShowSearch(false)} type="text" className="font-semibold text-lg w-full h-full py-2 px-6 rounded-lg transition-all" />
      </div>
    </header>
  );
};

export default Header;
