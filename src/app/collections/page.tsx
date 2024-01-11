"use client"
import { imgArray } from '@/utils'
import React, { useEffect, useState } from 'react'

const Page = () => {

  const [scrollBy, setScrollBy] = useState<number>(100)

  const handleSlide = ()=>{

    const slideShow = document.getElementById('slide-show')

    if(slideShow){
      slideShow.scroll(0, scrollBy+100)
    }
  } 

  useEffect(()=>{
    const slideShow = document.getElementById('slide-show')
    if(slideShow){
      slideShow.onscroll = () => setScrollBy(slideShow.scrollTop)
    }

  })


  return (
    <main id='slide-show'>

      <section className='slide text-3xl flex'>
        <img className='h-full w-full object-center object-cover absolute' src={imgArray[0]} alt="" />
      </section>
      <section className='slide text-3xl'>
        {/* Collection 1 */}
        <img className='h-full w-full object-center object-cover absolute' src={imgArray[1]} alt="" />

      </section>
      <section className='slide text-3xl'>
        <img className='h-full w-full object-center object-cover absolute' src={imgArray[2]} alt="" />
      </section>
      <section className='slide text-3xl'>
        <img className='h-full w-full object-center object-cover absolute' src={imgArray[2]} alt="" />
      </section>

      {/* <div className='bg-black/30 backdrop:blur-sm flex justify-center items-center fixed bottom-0 w-full p-2'>
      <i onClick={()=>handleSlide()} className="fi fi-rr-angle-down text-3xl" />
      </div> */}

    </main>
  )
}

export default Page