"use client"
import AdminMenu from '@/components/Admin/AdminMenu'
import { useAppSelector } from '@/redux/store'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    const authUser = useAppSelector((state) => state.authReducer.value)
    const [count, setCount] = useState(1)
    useEffect(()=>{
        const debounce = setTimeout(()=>{
            if(count){
                setCount(count-1)
            }
        }, 1000)
        return () => clearTimeout(debounce)
    }, [count])

  return (
    <>
{
    count == 0 &&
    <main className='container1'>
        <h1 className='flex items-center gap-4 py-4 text-xl'>
            <i className="fi fi-sr-user-pen"/>
            <span className='capitalize'>Admin Panel {`/ ${pathname.split('/').at(-1)}`}</span>
        </h1>
        <div className='flex gap-4 h-[70vh]'>
            <AdminMenu activeMenu={(pathname.split('/').at(-1) || "")}/>
            <div className='relative h-full flex-1 rounded-lg p-4 space-y-2 shadow-sm shadow-black/30 overflow-hidden'>
                {children}
            </div>
        </div>
    </main>
}
</>
  )
}

export default AdminLayout