"use client"
import React, { useState } from 'react'

const OrderStatus = ({itemStatus}: {itemStatus: string}) => {

    const [status, setStatus] = useState( itemStatus || "pending")

  return (
    <div className='w-fit h-fit group/order-status relative'>
        <p className={`${status == 'pending' && 'bg-yellow-300'} ${status == 'delivered' && 'bg-green-300'} ${status == 'canceled' && 'bg-red-300'}  py-1 px-2 rounded-lg w-[100px] text-center`}>{status}</p>
        <div className=' rounded-lg shadow-sm shadow-black absolute z-[3] bg-[#f5f5f5] h-0 w-0 overflow-hidden transition-all group-hover/order-status:w-[100px] group-hover/order-status:h-fit flex flex-col'>
            <button className='py-1 px-2 hover:bg-yellow-300' onClick={() => setStatus('pending')}>pending</button>
            <hr />
            <button className='py-1 px-2 hover:bg-green-300' onClick={() => setStatus('delivered')}>delivered</button>
            <hr />
            <button className='py-1 px-2 hover:bg-red-300' onClick={() => setStatus('canceled')}>canceled</button>
        </div>
    </div>
  )
}

export default OrderStatus