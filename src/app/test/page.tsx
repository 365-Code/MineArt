"use client"
import CloudinaryUpload from '@/components/CloudinaryUpload'
import React, { useState } from 'react'

const Page = () => {

    const [images, setImages] = useState([] as Array<object>)

  return (
    <div>
        <CloudinaryUpload setResource={setImages} resource={images}/>
    </div>
  )
}

export default Page