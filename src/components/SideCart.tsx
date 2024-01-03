import { cartArray } from '@/utils'
import React from 'react'
import SideCartItem from './SideCartItem'
import Link from 'next/link'

const SideCart = () => {
  return (
    <div className='rounded-lg overflow-hidden bg-white flex flex-col custom-scrollbar max-h-[400px]'>
      <h3 className='text-lg font-semibold py-3'>Shopping Cart</h3>
      <hr />
        <div className='space-y-2 flex-1 z-10 overflow-y-scroll h-full custom-scrollbar '>
        {
            cartArray.map((c, i)=> <SideCartItem key={c.id} cartItem={c} />)
        }
        </div>
        <hr />
      <div>
        <Link href={'/cart'}>
          <button className='font-semibold bg-slate-900 transition-all w-full p-4 text-white'>Checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default SideCart