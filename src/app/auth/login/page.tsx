'use client'
import { login } from "@/redux/features/authSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Page = () => {
  const nav = useRouter()
  const [authInfo, setAuthInfo] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      await signInWithEmailAndPassword(auth, authInfo.email, authInfo.password)

      const result = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify({email: authInfo.email})
      })
      const res = await result.json()
      if(res.success){
        dispatch(login(res.user._id))
        toast.success("Logged In Successfully")
        nav.push('/')
      }
    } catch (error: any) {
      toast.error(error.code)
      return error;
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setAuthInfo({...authInfo, [name]: value})
  }

  const authUser = useAppSelector((state) => state.authReducer.value)

  useEffect(() => {
    authUser.isLogged && nav.push('/')
  }, [authUser.isLogged])


  return (
    <main className="container1">
      <div className="relative mx-auto w-[900px] flex h-[500px] items-center justify-center shadow-sm shadow-black/30 sm:flex-row max-w-[90%]">
        <div className="flex h-full basis-1/2 flex-1 items-center justify-center p-4 sm:p-8 md:p-12">
          <form onSubmit={handleLogin} className="flex w-full flex-col gap-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-semibold">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={authInfo.email}
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
                onChange={handleChange}
                value={authInfo.password}
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
            
            <Link href="/auth/forgotPassword" className="text-sm underline text-right">Forgot Password?</Link>

            </div>
            <p className="text-sm">New Registeration? <Link href={'/auth/register'} className="text-pink-500 underline">Sign Up</Link></p>
            <button className="w-fit text-white rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600">
              Login
            </button>
          </form>
        </div>
        <div className="md:relative md:opacity-100 absolute top-0 left-0 -z-[1] opacity-50 h-full w-full flex-shrink basis-1/2">
          <Image
            width={400}
            height={400}
            src={'/login.svg'}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
