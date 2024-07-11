"use client"
import { cartArray } from '@/utils'
import React from 'react'
import CartItem from './CartItem'
import { useAppSelector } from '@/redux/store'
import Image from 'next/image'

const CartItems = () => {

  const cartItems = useAppSelector((state) => state.cartReducer.value.items)

  return (
    <div className='flex-1 container2 space-y-2 py-4 flex flex-col bg-white'>
        <div className='flex items-center justify-between py-2 px-4'>
            <h1 className='text-3xl font-bold'>Shopping Cart</h1>
            <p className='font-semibold text-gray-500 text-sm'>{cartItems.length} Items</p>
        </div>
        <div className='flex-1 overflow-y-scroll no-scrollbar py-2'>
        {
          cartItems.length
          ?
            cartItems.map((c,i)=><CartItem key={c._id} cartItem={c}/>)
          :
          <div>
            <Image width={300} height={300} src="/empty-cart.png" className='mx-auto' alt="" />
          <h2 className='text-2xl font-bold py-2 px-4 text-center'>No items in Cart</h2>
          </div>

        }
        </div>
    </div>
  )
}

export default CartItems