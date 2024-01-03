import CartItems from '@/components/CartItems'
import Checkout from '@/components/Checkout'
import React from 'react'

const Page = () => {
  return (
    <main className='container1 h-[85vh]'>
        <div className='rounded-lg shadow-xl shadow-black/10 overflow-hidden flex flex-1 h-full'>
            <CartItems/>
            <Checkout/>
        </div>
    </main>
  )
}

export default Page