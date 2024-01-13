"use client"
import React, { useEffect } from 'react'

const AskPrompt = ({title, show, handle, setShow, type}: {title: string, show: any, handle: any, setShow: any, type: string}) => {
  
  useEffect(()=>{
    const main = document.getElementById('main')
    if(main){
      main.onclick = () => {
        setShow(false)
      }
    }
  })

  return (
    <div className={`${show ? "translate-y-0 fixed top-4" : "absolute -top-4"} space-y-2 p-4 shadow-sm shadow-black/30 transition-all -translate-y-full left-1/2 -translate-x-1/2  w-[300px] h-fit rounded-lg bg-[#f5f5f5] z-[10]`}>
    <h1 className="text-base capitalize">{title} &#63;</h1>
    <div className="space-x-2 text-right">
    <button onClick={handle} className={`py-1 px-2 ${type == "red" && "bg-red-500 hover:bg-red-600"} ${type == "blue" && "bg-blue-500 hover:bg-blue-600"} rounded-lg`}>Yes</button>
    <button onClick={()=> setShow(false)} className="py-1 px-2 border border-black rounded-lg">No</button>
    </div>
  </div>
  )
}

export default AskPrompt