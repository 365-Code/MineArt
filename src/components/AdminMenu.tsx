"use client"
import Link from 'next/link'
import React from 'react'

const AdminMenu = ({activeMenu}: {activeMenu: string}) => {

  return (
    <div className='rounded-lg h-full space-y-2 shadow-sm shadow-black/30 w-fit md:w-[250px] p-4'>
        <Link href={'/auth/admin/dashboard'} className={`${activeMenu == 'dashboard' && 'bg-[#e3e3e3]'} hover:bg-[#e3e3e3] w-full rounded-lg p-4 flex items-center gap-2 text-xl`}>
            <i className="fi fi-rr-box-open-full" />
            <span className='hidden md:inline'>Dashboard</span>
        </Link>
        <Link href={'/auth/admin/users'} className={`${activeMenu == 'users' && 'bg-[#e3e3e3]'} hover:bg-[#e3e3e3] w-full rounded-lg p-4 flex items-center gap-2 text-xl`}>
            <i className="fi fi-rr-box-open-full" />
            <span className='hidden md:inline'>Users</span>
        </Link>
        <Link href={'/auth/admin/orders'} className={`${activeMenu == 'orders' && 'bg-[#e3e3e3]'} hover:bg-[#e3e3e3] w-full rounded-lg p-4 flex items-center gap-2 text-xl`}>
            <i className="fi fi-rr-box-open-full" />
            <span className='hidden md:inline'>Orders</span>
        </Link>
        <Link href={'/auth/admin/products'} className={`${activeMenu == 'products' && 'bg-[#e3e3e3]'} hover:bg-[#e3e3e3] w-full rounded-lg p-4 flex items-center gap-2 text-xl`}>
            <i className="fi fi-rr-box-open-full" />
            <span className='hidden md:inline'>Products</span>
        </Link>
    </div>
  )
}

export default AdminMenu