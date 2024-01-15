import { imgArray } from '@/utils'
import React from 'react'

type ItemType = {
    title: string,
    thumbnail: string
}

const CollectionCard = ({item}: {item?: any}) => {
  return (
    <div className='w-[300px] h-auto'>
        <div className='h-[300px]'>
            <img src={item.thumbnail} alt="" />
        </div>
        <div>
            <h3 className='font-semibold text-xl'>{item?.title || 'Title'}</h3>
        </div>
    </div>
  )
}

export default CollectionCard