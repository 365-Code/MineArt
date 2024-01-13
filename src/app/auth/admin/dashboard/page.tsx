import AdminLayout from '@/components/AdminLayout'
import AdminMenu from '@/components/AdminMenu'
import React from 'react'

const Page = () => {
  return (
    <AdminLayout>
        <h1 className='mb-4 text-left font-semibold text-xl'>Dashboard</h1>
        <div className='w-full h-full flex-1 '>
          <img src="https://cdn.dribbble.com/users/507216/screenshots/11825161/media/042f34162193d0b79e0bc0645b30966a.png?compress=1&resize=1200x900" className='w-full h-full object-cover object-center absolute top-0 left-0 -z-[1] opacity-80' alt="" />
        </div>
    </AdminLayout>
  )
}

export default Page