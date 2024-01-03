import ProductCard from '@/components/ProductCard'
import { imgArray, productArray } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container1">
      <div className='container2 space-y-12'>

        <section className='flex gap-8 h-[75vh] justify-between'>
          <div className='md:w-4/5 w-full h-full relative'>
            <div className='h-full w-full flex flex-col gap-4 px-12 justify-center items-start'>
              <p className='text-slate-500 text-lg'>Summer Sales Start</p>
              <h1 className='text-4xl font-semibold'>Buy White Marble<br />Best Quality</h1>
            </div>
            <img src={imgArray[0]} alt="" className='-z-[2] absolute top-0 left-0 w-full h-full object-cover object-center'/>
          </div>
          <div className='flex-1 flex flex-col gap-8 h-full'>
            <div className='relative img-hover-effect w-[350px] h-[350px] overflow-hidden flex flex-col justify-center p-8'>
              <img src={imgArray[1]} alt="" className='-z-[2] absolute top-0 left-0 w-full h-full object-cover object-center'/>
              <div className='space-y-2'>
                <h3 className='text-2xl font-semibold'>Dinner Wear<br/>Items</h3>
                <Link href={`/products/new`} className='text-sm text-pink-500 underline'>SHOP NOW</Link>
              </div>
            </div>
            <div className='relative img-hover-effect w-[350px] h-[350px] overflow-hidden flex flex-col justify-center p-8'>
              <img src={imgArray[2]} alt="" className='-z-[2] absolute top-0 left-0 w-full h-full object-cover object-center'/>
              <div className='space-y-2'>
                <h3 className='text-2xl font-semibold'>New Serving<br/>Plate</h3>
                <Link href={`/products/new`} className='text-sm text-pink-500 underline'>SHOP NOW</Link>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full'>
          <div className='flex items-center no-scrollbar gap-4 max-w-full overflow-x-scroll'>
          {
            productArray.map((p,i)=><ProductCard key={p.id} product={p}/>)
          }
          </div>
        </section>

        <section>
          
        </section>

      </div>
    </main>
  )
}