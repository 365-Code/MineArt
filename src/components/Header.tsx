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
    const navBefore = document.getElementById("navBefore")
    if (main) {
      main.onclick = () => {
        setShowSearch(false);
        setShowCart(false);
        setShowMenu(false);
      };
    }

    if(navBefore){
      navBefore.onclick = ()=> setShowMenu(false)
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
      className="container1 space-y-2 fixed left-0 top-0 z-10 w-full bg-white/90 text-center drop-shadow-xl transition-all backdrop:blur-sm"
    >
      <div className="container3 flex items-center justify-between">
        <div className="flex w-fit items-center gap-4">
          <button onClick={toggleMenu} className="relative md:hidden">
            <i className="fi fi-sr-bars-staggered icons" />
          </button>
          <Link href={"/"} className="w-fit text-2xl font-bold ">
            MineArt
          </Link>
        </div>

        <nav
          id="navMenu"
          className={`${
            showMenu
              ? "visible z-30 w-[300px] translate-x-0 border bg-[#f5f5f5]"
              : "invisible -translate-x-full "
          } py-8 absolute left-0 top-0 flex h-screen flex-col items-center gap-6 text-lg font-semibold transition-all md:visible md:relative md:h-auto md:translate-x-0 md:flex-row md:gap-8 md:border-none md:p-0`}
        >
          <button onClick={toggleMenu} className={`text-sm md:hidden`}>
            <i className="fi fi-sr-cross" />
          </button>
          <Link
            onClick={() => setShowMenu(false)}
            href="/collections"
            className={`nav-link ${
              pathname.startsWith("/collections") && "nav-link-selected"
            } relative transition-all`}
          >
            collections
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            href="/products"
            className={`nav-link ${
              pathname.startsWith("/products") && "nav-link-selected"
            } relative transition-all`}
          >
            products
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            href="/about"
            className={`nav-link ${
              pathname.startsWith("/about") && "nav-link-selected"
            } relative transition-all`}
          >
            about
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            href="/services"
            className={`nav-link ${
              pathname.startsWith("/services") && "nav-link-selected"
            } relative transition-all`}
          >
            services
          </Link>
          <div id="navBefore" className="w-screen h-screen bg-black/40 sm:hidden backdrop:blur-sm absolute top-0 left-full" />
        </nav>

        <div className="flex items-center gap-6">
          <i
            onClick={toggleSearch}
            className="fi fi-rs-search icons hover:rotate-12"
          />

          <div className="group/pMenu relative">
            <i className="fi fi-rs-user icons" />
            <div className="absolute right-0 top-[30px] h-0 w-0 space-y-2 overflow-hidden rounded-lg bg-[#f5f5f5] shadow-sm shadow-black/30 transition-all group-hover/pMenu:h-[150px] group-hover/pMenu:w-[200px] group-hover/pMenu:p-4">
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
              <Link
                href={"/cart"}
                className="flex items-center gap-2 hover:text-pink-500"
              >
                <i className="fi fi-ss-shopping-cart" />
                <span>cart</span>
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
            <SideCart setShowCart={setShowCart}/>
          </div>
        </div>
      </div>
      
      <div
        className={`${
          showSearch ? "h-10" : "h-0"
        } absolute top-full left-0 w-full flex justify-center px-4 items-center overflow-hidden transition-all`}
      >
        <div className="w-[800px] h-10 flex items-center max-w-full bg-white px-4 rounded-lg overflow-hidden">
          <i className="fi fi-rs-search icons" />
          <input
            onBlur={() => setShowSearch(false)}
            type="text"
            className=" w-full rounded-lg py-2 px-6 text-lg font-semibold transition-all"
            />
        </div>
      </div>

    </header>
  );
};

export default Header;
