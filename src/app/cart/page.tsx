import CartItems from '@/components/CartItems'
import Checkout from '@/components/Checkout'
import React from 'react'

const Page = () => {
  return (
    <main className='container1 max-h-screen overflow-y-scroll no-scrollbar'>
        <div className='rounded-lg flex-col h-full sm:flex-row shadow-xl shadow-black/10 overflow-hidden flex flex-1'>
            <CartItems/>
            <Checkout/>
        </div>
    </main>
  )
}

export default Page