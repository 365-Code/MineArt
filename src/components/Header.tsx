"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideCart from "./SideCart";
import { cartArray } from "@/utils";
import { useAppSelector } from "@/redux/store";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);


  const pathname = usePathname();
  pathname.includes("/products");
  pathname.split("/");

  const onSearch = () => {
    console.log("Searching");
    setShowSearch(false);
  };

  const cart = useAppSelector((state) => state.cartReducer.value)

  useEffect(() => {
    const main = document.getElementById("main");
    if (main) {
      main.onclick = () => {
        setShowSearch(false);
        setShowCart(false);
      };
    }
  }, [showSearch, setShowSearch]);

  const toggleSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
  };

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <header
      id="header"
      key={"working"}
      className="container1 fixed left-0 z-10 top-0 w-full space-y-4 bg-white/90 text-center drop-shadow-xl transition-all backdrop:blur-sm"
    >
      <div className="container3 flex items-center justify-between">
        <Link href={"/"} className="w-fit text-2xl font-bold">
          MineArt
        </Link>
        <nav className="invisible absolute flex flex-col items-center gap-8 text-lg font-semibold md:visible md:relative md:flex-row">
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

        <div className="flex items-center gap-6">
          <i
            onClick={toggleSearch}
            className="fi fi-rs-search icons hover:rotate-12"
          />

          <div className="group/pMenu relative">
            <i className="fi fi-rs-user icons" />
            <div className="group-hover/pMenu:p-4 group-hover/pMenu:h-[120px] group-hover/pMenu:w-[200px] h-0 w-0 bg-[#f5f5f5] rounded-lg space-y-2 absolute right-0 top-[30px] overflow-hidden shadow-sm shadow-black/30 transition-all">
              <Link href={'/auth/login'} className="hover:text-pink-500 flex items-center gap-2">
                <i className="fi fi-rr-sign-in-alt icons" />
                <span>login</span>
              </Link>
              <hr />
              <Link href={'/user/profile'} className="hover:text-pink-500 flex items-center gap-2">
                <i className="fi fi-ss-user-pen" />
                <span>Profile</span>
              </Link>
              <Link href={'/wishlist'} className="hover:text-pink-500 flex items-center gap-2">
                <i className="fi fi-ss-heart" />
                <span>wishlist</span>
              </Link>
            </div>
          </div>

          <span className="flex items-center gap-1">
            <i onClick={toggleCart} className="fi fi-rs-shopping-cart icons" />
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">
              {0 || cart.items.length}
            </span>
          </span>
          <div
            className={`${
              showCart ? "visible translate-x-0" : "invisible translate-x-full"
            } absolute right-0 top-full w-[400px] transition-all`}
          >
            <SideCart />
          </div>
        </div>
      </div>
      <div
        className={`${
          showSearch ? "h-10" : "h-0"
        } absolute top-full mx-auto flex items-center overflow-hidden rounded-lg bg-white px-4 transition-all md:w-4/5`}
      >
        <i className="fi fi-rs-search icons" />
        <input
          onBlur={() => setShowSearch(false)}
          type="text"
          className="h-full w-full rounded-lg px-6 py-2 text-lg font-semibold transition-all"
        />
      </div>
    </header>
  );
};

export default Header;
