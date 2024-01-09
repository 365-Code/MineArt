"use client"
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import React, { useEffect, useState } from 'react'

const Page = () => {

  
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState(Array)
  const [products, setProducts] = useState(Array<any>);
  const pL = allProducts.length
  const pages = pL/9 > 1 ? Math.round(pL/9) + ( pL%9 ? 1 : 0) : 1;

  
  const fetchAllProducts = async ()=>{
    try{
      const result = await fetch('/api/product/getAllProducts');
      const res = await result.json()
      if(res.success){
        setAllProducts(res.products)
        setProducts(res.products)
      }
    } catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAllProducts()
  }, [allProducts])

  useEffect(()=>{
    setProducts(()=> (allProducts.slice( (currentPage-1)*9, currentPage*9)) )
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

        <div className='md:flex justify-between py-4'>
          <div className='md:block hidden flex-1 space-y-2'>
            <p className='text-lg font-semibold px-2 cursor-pointer underline'>All</p>
            <p className='text-lg font-semibold px-2 cursor-pointer'>TableWare</p>
            <p className='text-lg font-semibold px-2 cursor-pointer'>Bowls</p>
            <p className='text-lg font-semibold px-2 cursor-pointer'>Vases</p>
          </div>
          
          <div>
            <div className='gap-6 grid grid-cols-1 sm:justify-start justify-items-center sm:grid-cols-2 md:grid-cols-3'>
              {
                products.map((p, i)=> <ProductCard key={p._id} product={p} />)
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