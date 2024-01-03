"use client"
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import { productArray } from '@/utils'
import React, { use, useEffect, useState } from 'react'

const Page = () => {

  const pL = productArray.length
  const pages = pL/9 > 1 ? Math.round(pL/9) + ( pL%9 ? 1 : 0) : pL;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(Array(0));

  useEffect(()=>{
    
    const p = productArray.slice( (currentPage-1)*9, currentPage*9)
    setProducts(()=> (productArray.slice( (currentPage-1)*9, currentPage*9)) )
  
  }, [currentPage, setCurrentPage])

  return (
    <main className='container1'>
      <div className='container2'>
        <h2 className='text-4xl'>Catalog</h2>
        <hr className='w-3/5 h-[2px] my-1 bg-slate-900'/>
        
        <div className='flex justify-end font-semibold items-center gap-4'>
          <p className='flex gap-2 items-center'>Filter <i className="fi fi-ss-filter" /> </p>
          <p className='flex gap-2 items-center'>Sort <i className="fi fi-ss-sort" /></p>
        </div>
        <div className='flex justify-between py-4'>
          <div className='flex-1 space-y-2'>
            <p className='text-lg font-semibold px-2 cursor-pointer underline'>All</p>
            <p className='text-lg font-semibold px-2 cursor-pointer'>TableWare</p>
            <p className='text-lg font-semibold px-2 cursor-pointer'>Bowls</p>
            <p className='text-lg font-semibold px-2 cursor-pointer'>Vases</p>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-6'>
              {
                products.map((p, i)=> <ProductCard key={i} product={p} />)
              }
            </div>
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page