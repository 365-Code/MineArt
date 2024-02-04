"use client"
import CloudinaryUpload from '@/components/CloudinaryUpload'
import CollectionCard from '@/components/CollectionCard'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const [images, setImages] = useState([] as Array<object>)

  return (
    <div>
        {/* {
            images?.length > 0 && 
            images.map((im: any, ind) => <img key={ind} src={im.secure_url} alt='none' className='w-[200px] h-[200px]' />)
        } */}
        <CloudinaryUpload setResource={setImages} resource={images}/>
    </div>
  )
}

export default Page