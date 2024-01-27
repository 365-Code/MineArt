import { footerArray } from "@/utils";
import Link from "next/link";
import React from "react";
import FooterCategories from "./FooterCategories";

const Footer = () => {
  const today = new Date()

  return (
    <>
    <FooterCategories />
    <footer className="container1">
      <div className="container3 text-center space-y-6 font-semibold ">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {footerArray.map((f, i) => (
            <Link key={i} href={`${"/collections/" + f}`} className="hover:text-pink-500 capitalize">{f}</Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link href={'https://github.com/365-Code/MineArt'}>
            <i className="fi fi-brands-github text-slate-500 text-2xl" />
          </Link>
          <i className="fi fi-brands-telegram text-blue-500 text-2xl" />
          <i className="fi fi-brands-instagram text-pink-500 text-2xl" />
          <i className="fi fi-brands-linkedin text-blue-500 text-2xl" />
        </div>
        <p className="text-sm">Copyright &copy; {today.getFullYear()}. MineArt. All Right Reserved</p>
      </div>
    </footer>
    </>

  );
};

export default Footer;
