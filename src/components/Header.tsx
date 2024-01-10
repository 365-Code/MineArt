"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideCart from "./SideCart";
import { useAppSelector } from "@/redux/store";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const pathname = usePathname();
  pathname.includes("/products");
  pathname.split("/");

  const onSearch = () => {
    console.log("Searching");
    setShowSearch(false);
  };

  const cart = useAppSelector((state) => state.cartReducer.value);

  useEffect(() => {
    const main = document.getElementById("main");
    if (main) {
      main.onclick = () => {
        setShowSearch(false);
        setShowCart(false);
        setShowMenu(false);
      };
    }
  }, [showSearch, showCart, showMenu]);

  const toggleSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
  };

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <header
      id="header"
      className="container1 fixed left-0 top-0 z-10 w-full space-y-4 bg-white/90 text-center drop-shadow-xl transition-all backdrop:blur-sm"
    >
      <div className="container3 flex items-center justify-between">
        <div className="flex w-fit gap-4 items-center">
          <button onClick={toggleMenu} className="md:hidden relative">
            <i className="fi fi-sr-bars-staggered icons" />
          </button>
          <Link href={"/"} className="w-fit text-2xl font-bold ">
            MineArt
          </Link>
        </div>

        <nav
          className={`${
            showMenu
              ? "visible w-[300px] translate-x-0 bg-[#f5f5f5]"
              : "invisible -translate-x-full "
          } container1 absolute left-0 top-0 md:translate-x-0 flex h-screen flex-col items-center gap-6 text-lg font-semibold transition-all md:visible md:relative md:h-auto md:flex-row md:gap-8 md:border-none md:p-0`}
        >
          <button onClick={toggleMenu} className={`text-sm md:hidden`}>
            <i className="fi fi-sr-cross" />
          </button>
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
            <div className="absolute right-0 top-[30px] h-0 w-0 space-y-2 overflow-hidden rounded-lg bg-[#f5f5f5] shadow-sm shadow-black/30 transition-all group-hover/pMenu:h-[120px] group-hover/pMenu:w-[200px] group-hover/pMenu:p-4">
              <Link
                href={"/auth/login"}
                className="flex items-center gap-2 hover:text-pink-500"
              >
                <i className="fi fi-rr-sign-in-alt icons" />
                <span>login</span>
              </Link>
              <hr />
              <Link
                href={"/user/profile"}
                className="flex items-center gap-2 hover:text-pink-500"
              >
                <i className="fi fi-ss-user-pen" />
                <span>Profile</span>
              </Link>
              <Link
                href={"/wishlist"}
                className="flex items-center gap-2 hover:text-pink-500"
              >
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
