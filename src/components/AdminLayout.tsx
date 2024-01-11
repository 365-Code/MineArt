"use client"
import AdminMenu from '@/components/AdminMenu'
import { usePathname } from 'next/navigation'
import React from 'react'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()

  return (
    <main className='container1'>
        <h1 className='flex items-center gap-4 py-4 text-xl'>
            <i className="fi fi-sr-user-pen"/>
            <span className='capitalize'>Admin Panel {`/ ${pathname.split('/').at(-1)}`}</span>
        </h1>
        <div className='flex gap-4 h-[70vh]'>
            <AdminMenu activeMenu={(pathname.split('/').at(-1) || "")}/>
            <div className='flex-1 rounded-lg p-4 shadow-sm shadow-black/30 overflow-hidden'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default AdminLayout