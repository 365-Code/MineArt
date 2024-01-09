import { imgArray } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="container1">
      <div className="relative mx-auto w-[900px] flex h-[500px] items-center justify-center shadow-sm shadow-black/30 sm:flex-row max-w-[90%]">
        <div className="flex h-full basis-1/2 flex-1 items-center justify-center p-12">
          <form action="" className="flex w-full flex-col gap-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-semibold">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="new@MineArt.com"
                className="w-full rounded-sm p-2"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-semibold">
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*********"
                className="w-full rounded-sm p-2"
              />
            </div>
            <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="accent-blue-600"
                />
              <label htmlFor="remember" className="text-sm font-semibold">
                Remember
              </label>
            </div>
            
            <Link href="/auth/forgotPassword" className="text-sm underline">Forgot Password?</Link>

            </div>
            <p className="text-sm">New Registeration? <Link href={'/auth/register'} className="text-pink-500 underline">Sign Up</Link></p>
            <button className="w-fit rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600">
              Login
            </button>
          </form>
        </div>
        <div className="sm:relative sm:opacity-100 absolute top-0 left-0 -z-[1] opacity-50 h-full w-full flex-shrink basis-1/2">
          <Image
            width={400}
            height={400}
            src={imgArray[0]}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
