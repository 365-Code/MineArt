import { imgArray } from '@/utils'
import Image from 'next/image'
import React from 'react'

type ItemType = {
    title: string,
    thumbnail: string
}

const CollectionCard = ({item}: {item?: any}) => {
  return (
    <div className='w-[300px] h-auto space-y-3'>
        <div className='h-[300px] w-[300px]'>
            <Image height={500} width={500} src={item.thumbnail || "thumbnail"} alt="" className='res-img'/>
        </div>
        <div>
            <h3 className='font-semibold text-xl'>{item?.title || 'Title'}</h3>
            <p className='underline text-slate-400'>{item?.material || 'material'}</p>
        </div>
    </div>
  )
}

export default CollectionCard