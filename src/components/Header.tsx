"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import SideCart from "./SideCart";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setAllProducts } from "@/redux/features/productSlice";
import { login, logout } from "@/redux/features/authSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { toast } from "react-toastify";
import { ProductType, checkAdmin } from "@/utils";
import { setInitialCart } from "@/redux/features/cartSlice";
import { setInitialWish } from "@/redux/features/wishSlice";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const pathname = usePathname();
  const nav = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const authUser = useAppSelector((state) => state.authReducer.value);
  const cart = useAppSelector((state) => state.cartReducer.value);
  const allProducts = useAppSelector((state) => state.productReducer.value)

  const searchProduct = async () => {
    try {
      const result = await fetch(
        `/api/product/searchProducts?search=${searchInput}&filter=${searchInput}`,
      );
      if (result.ok) {
        const res = await result.json();
        dispatch(setAllProducts(res.products));

      }
    } catch (error) {
      return error;
    }
  };
  
  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    searchProduct();
    nav.push(`/products?search=${searchInput || "All"}`);
  };

  const toggleSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
  };

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.clear();
    signOut(auth);
    toast.success("Logged out");
  };

  const signUser = async () => {
    const data = localStorage.getItem("authUser");
    if (data) {
      const isMe = await checkAdmin(data);
      dispatch(login({ user: data, isMe }));
    }
  };

  useEffect(() => {
    const main = document.getElementById("main");
    const navBefore = document.getElementById("navBefore");
    if (main) {
      main.onclick = () => {
        setShowSearch(false);
        setShowCart(false);
        setShowMenu(false);
      };
    }

    if (navBefore) {
      navBefore.onclick = () => setShowMenu(false);
    }
  }, [showSearch, showCart, showMenu]);

  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/getAllProducts");
      const res = await result.json();
      if (res.success) {
        const allProducts = res.products
        dispatch(setAllProducts(allProducts));
        const cartData = localStorage.getItem('cart');
        const wishData = localStorage.getItem('wish');
        if(cartData){
          const cart = JSON.parse(cartData);
          const crt = cart.map((c: {id: string, qty: number}) => {
            const index = allProducts.findIndex((p: ProductType) => p._id == c.id);
            
            if(index != -1){
              return {
                ...allProducts[index],
                qty: c.qty
              }
            }
          })
          
          if(crt){
            dispatch(setInitialCart(crt))
          }
        }
        if(wishData){
          const wish = JSON.parse(wishData);
          const wsh = wish.map((c: {id: string, qty: number}) => {
            const index = allProducts.findIndex((p: ProductType) => p._id == c.id);
            
            if(index != -1){
              return {
                ...allProducts[index],
                qty: c.qty
              }
            }
          })
          
          if(wsh){
            dispatch(setInitialWish(wsh))
          }
        }
      }
      return allProducts;
    } catch (error) {
      return error;
    }
  };

  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      auth.updateCurrentUser(user)
    })
    fetchAllProducts()
  },[])
  
  useEffect(() => {
    const data = localStorage.getItem("authUser");
    !authUser.isLogged && signUser();
    if (
      pathname.includes("/auth/admin") &&
      !data &&
      !authUser.isLogged &&
      !authUser.isAdm
    ) {
      nav.push("/error/unauth");
    }
    // authUser.isLogged && checkAdmin()
  }, [authUser.isLogged, pathname]);

  return (
    <header
      id="header"
      className="container1 fixed left-0 top-0 z-10 w-full space-y-2 bg-white/90 text-center drop-shadow-xl transition-all backdrop:blur-sm"
    >
      <div className="container3 flex items-center justify-between">
        <div className="flex w-fit items-center gap-4">
          <button onClick={toggleMenu} className="relative md:hidden">
            <i className="fi fi-sr-bars-staggered icons" />
          </button>
          <Link href={"/"} className="w-fit text-3xl font-bold ">
            MineArt
          </Link>
        </div>

        <nav
          id="navMenu"
          className={`${
            showMenu
              ? "visible z-30 w-[300px] translate-x-0 border bg-[#f5f5f5] px-8 md:w-fit md:p-0"
              : "invisible -translate-x-full "
          } absolute left-0 top-0 flex h-screen flex-col items-start gap-6 border py-8 text-lg font-semibold transition-all sm:items-center md:visible md:relative md:h-auto md:translate-x-0 md:flex-row md:gap-8 md:border-none md:p-0`}
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
          <div
            id="navBefore"
            className="absolute left-full top-0 h-screen w-screen bg-black/40 backdrop:blur-sm sm:hidden"
          />
        </nav>

        <div className="flex items-center gap-6">
          <label htmlFor="search">
            <i
              onClick={toggleSearch}
              className="fi fi-rs-search icons hover:rotate-12"
            />
          </label>

          <div className="group/pMenu relative">
            <i className="fi fi-rs-user icons" />
            <div className="absolute right-0 top-[30px] h-0 w-0 space-y-2 overflow-hidden rounded-lg bg-[#f5f5f5] shadow-sm shadow-black/30 transition-all group-hover/pMenu:h-auto group-hover/pMenu:w-[220px] group-hover/pMenu:p-4">
              {!authUser.isLogged && (
                <>
                  <Link
                    href={"/auth/login"}
                    className="flex items-center gap-2 hover:text-pink-500"
                  >
                    <i className="fi fi-sr-enter icons" />
                    <span>login</span>
                  </Link>
                  <hr />
                </>
              )}
              {authUser.isLogged && (
                <Link
                  href={`/${authUser.token}/profile`}
                  className="flex items-center gap-2 hover:text-pink-500"
                >
                  <i className="fi fi-ss-user-pen" />
                  <span>Profile</span>
                </Link>
              )}
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
              {authUser.isAdm && (
                <>
                  <hr />
                  <Link
                    href={"/auth/admin"}
                    className="flex items-center gap-2 hover:text-pink-500"
                  >
                    <i className="fi fi-sr-user-pen" />
                    <span>admin</span>
                  </Link>
                </>
              )}
              {authUser.isLogged && (
                <>
                  <hr />
                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-2 hover:text-pink-500"
                  >
                    <i className="fi fi-sr-power icons" />
                    <span>log out</span>
                  </button>
                </>
              )}
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
            } absolute right-0 top-full transition-all`}
          >
            <SideCart setShowCart={setShowCart} />
          </div>
        </div>
      </div>

      <div
        className={`${
          showSearch ? "h-10" : "h-0"
        } absolute left-0 top-full flex w-full items-center justify-center overflow-hidden px-4 transition-all`}
      >
        <form
          onSubmit={handleSearch}
          className="flex h-10 w-[800px] max-w-full items-center overflow-hidden rounded-lg bg-white px-4"
        >
          <i className="fi fi-rs-search icons" />
          <input
            value={searchInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchInput(e.target.value)
            }
            onBlur={() => setShowSearch(false)}
            type="search"
            id="search"
            autoComplete="off"
            autoFocus={showSearch}
            className="input-fill w-full rounded-lg px-6 py-2 text-lg font-semibold transition-all"
          />
          <button type="submit" className="hidden" />
        </form>
      </div>
    </header>
  );
};

export default Header;
