"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [count, setCount] = useState(5)
    const nav = useRouter()

    useEffect(()=>{
        if(count == 0){
            nav.push('/')
        }
        const debounce = setTimeout(()=>{
            setCount(count-1)
        }, 1000)
        return () => clearTimeout(debounce)
    }, [count])

  return (
    <div className='flex flex-col items-center justify-center'>
        <Image width={400} height={400} src={'/unauth.svg'} alt='unauth' />
        <h3>This page is not accessible {count}</h3>
    </div>
  )
}

export default Page