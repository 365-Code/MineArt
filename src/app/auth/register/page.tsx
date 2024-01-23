"use client"
import { useAppSelector } from "@/redux/store";
import { auth } from "@/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {

  const nav = useRouter()
  const [authInfo, setAuthInfo] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setAuthInfo({...authInfo, [name]: value})
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, authInfo.email, authInfo.password)
      const result = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify(authInfo)
      })
      const res = await result.json()
      if(res.success){
        toast.success(res.msg)
        nav.push('/auth/login')
      }
    } catch (error: any) {
      toast.error(error.code)
      return error
    }
  }

  const authUser = useAppSelector((state) => state.authReducer.value)

  useEffect(() => {
    authUser.isLogged && nav.push('/')
  }, [authUser])


  return (
    <main className="container1">
      <div className="relative mx-auto w-[900px] flex h-[500px] items-center justify-center shadow-sm shadow-black/30 sm:flex-row max-w-[90%]">
        <div className="flex h-full basis-1/2 flex-1 items-center justify-center p-4 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <h3 className="text-lg">Welcome to <span className="font-semibold text-xl">MineArt</span></h3>
          <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-semibold">
                Your name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={authInfo.username}
                onChange={handleChange}
                placeholder="John doe"
                className="w-full rounded-sm p-2"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-semibold">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={authInfo.email}
                onChange={handleChange}
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
                value={authInfo.password}
                onChange={handleChange}
                placeholder="*********"
                className="w-full rounded-sm p-2"
              />
            </div>
            <p className="text-sm">Already Registered? <Link href={'/auth/login'} className="text-pink-500 underline">login</Link> </p>
            <button type="submit" className="w-fit text-white rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600">
              Register
            </button>
          </form>
        </div>
        <div className="md:relative md:opacity-100 absolute top-0 left-0 -z-[1] opacity-50 h-full w-full flex-shrink basis-1/2">
          <Image
            width={400}
            height={400}
            src={'/register.svg'}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
