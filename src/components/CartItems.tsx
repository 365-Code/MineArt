import { cartArray } from '@/utils'
import React from 'react'
import CartItem from './CartItem'

const CartItems = () => {
  return (
    <div className='flex-1 container2 space-y-2 py-4 flex flex-col bg-white'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold py-2 px-4'>Shopping Cart</h1>
            <p className='font-semibold text-gray-500 text-sm'>{cartArray.length} Items</p>
        </div>
        <div className='flex-1 overflow-y-scroll no-scrollbar py-2'>
        {
            cartArray.map((c,i)=><CartItem key={c.id} cartItem={c}/>)
        }
        </div>
    </div>
  )
}

export default CartItems