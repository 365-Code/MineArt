import React from 'react'

const Rating = ({rate}: {rate: number}) => {
  return (
    <div className='flex gap-1'>
          <i className={`fi fi-ss-star cursor-pointer ${rate >= 1 && "text-yellow-400 hover:text-yellow-400"}`} />
          <i className={`fi fi-ss-star cursor-pointer ${rate >= 2 && "text-yellow-400 hover:text-yellow-400"}`} />
          <i className={`fi fi-ss-star cursor-pointer ${rate >= 3 && "text-yellow-400 hover:text-yellow-400"}`} />
          <i className={`fi fi-ss-star cursor-pointer ${rate >= 4 && "text-yellow-400 hover:text-yellow-400"}`} />
          <i className={`fi fi-ss-star cursor-pointer ${rate >= 5 && "text-yellow-400 hover:text-yellow-400"}`} />
    </div>
  )
}

export default Rating