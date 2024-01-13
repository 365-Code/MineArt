import Image from 'next/image'
import React from 'react'

const CSlide = ({slide}: {slide: any}) => {
  return (
    <section className="slide">
      {/* Collection 1 */}
      <Image
        width={5000}
        height={3000}
        className="absolute h-full w-full object-cover object-center"
        src={slide.thumbnail}
        alt={slide.title}
      />
      <div className='absolute text-white top-1/3 container1 -translate-y-1/2 w-[800px] max-w-full'>
        <h1 className='text-5xl font-semibold'>{slide.title}</h1>
        <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat autem, asperiores dolorum voluptatum error nisi ut accusantium odit minus.</p>
      </div>
    </section>
  )
}

export default CSlide