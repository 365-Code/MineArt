"use client"
import AdminLayout from '@/components/AdminLayout'
import { userArray } from '@/utils'
import React, { useEffect, useState } from 'react'

const Page = () => {

  type userType = {
    _id: string
    username: string,
    email: string,
    phone: number,
    pincode: number,
    address: string
  }

  const [usersList, setUsersList] = useState({total: 0, users: [] as Array<userType>})


  const fetchAllUsers = async ()=>{
    try {
      const result = await fetch('/api/auth/admin/fetchAllUsers')
      const res = await result.json()
      if(res.success){
        setUsersList({users: res.users, total: res.total})
      }
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])


  return (
    <AdminLayout>
        <h1 className='mb-4 text-left font-semibold text-xl'>All Users</h1>
      <div>
        <div className="grid grid-cols-5 rounded-lg p-2">
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rs-id-badge icons"/></span>User ID</h3>
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rr-id-card-clip-alt icons"/></span>Username</h3>
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rr-id-card-clip-alt icons"/></span>Email</h3>
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rs-phone-call icons"/></span>Phone Number</h3>
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rr-address-book icons"/></span>Address</h3>
        </div>
        <hr />
        {usersList.users?.map((u) => (
          <div key={u._id}>
            <div className="grid grid-cols-5 rounded-lg p-2 break-words gap-2">
              <p>{u._id}</p>
              <p>{u.username}</p>
              <p>{u.email}</p>
              <p className={!u.phone ? "text-red-500" : ""}>{u.phone && "+91"+ u.phone  || 'Not Available'}</p>
              <p className={!u.address ? "text-red-500" : ""}>{ (u.address && (u.address + " " + u.pincode) ) || 'Not Available'}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}

export default Page