import AdminLayout from '@/components/AdminLayout'
import AdminMenu from '@/components/AdminMenu'
import { userArray } from '@/utils'
import React from 'react'

const Page = () => {
  return (
    <AdminLayout>
        <h1 className='mb-4 text-left font-semibold text-xl'>All Users</h1>
      <div>
        <div className="grid grid-cols-4 rounded-lg p-2">
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rs-id-badge icons"/></span>User ID</h3>
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rr-id-card-clip-alt icons"/></span>Username</h3>
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rs-phone-call icons"/></span>Phone Number</h3>
          <h3 className='flex items-center gap-2 font-semibold text-base'><span><i className="fi fi-rr-address-book icons"/></span>Address</h3>
        </div>
        <hr />
        {userArray.map((u) => (
          <div key={u.id}>
            <div className="grid grid-cols-4 rounded-lg p-2">
              <p>{u.id}</p>
              <p>{u.username}</p>
              <p>+91 {u.phone}</p>
              <p>{u.address}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}

export default Page