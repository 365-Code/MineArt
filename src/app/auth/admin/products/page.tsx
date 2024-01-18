"use client"
import AdminLayout from '@/components/AdminLayout'
import AdminProductCard from '@/components/AdminProductCard'
import EditProduct from '@/components/EditProduct'
import Modal from '@/components/Modal'
import ProductCardSkeleton from '@/components/ProductCardSkeleton'
import { setAllProducts } from '@/redux/features/productSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Page = () => {

  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch<AppDispatch>()
  
  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/getAllProducts");
      const res = await result.json();
      if (res.success) {
        dispatch(setAllProducts(res.products))
      }
      return res.products
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const products = useAppSelector((state) => state.productReducer.value)

  return (
    <AdminLayout>
        <div className='flex gap-2 items-center justify-between'>
          <h1 className='text-left font-semibold text-xl'>All Products</h1>
          <button onClick={() => setShowModal(true)} className='flex gap-2 items-center border border-black hover:bg-slate-900 hover:text-white font-semibold p-1 px-2 rounded-lg'><span>Add</span><i className="fi fi-sr-add" /></button>
        </div>
        <input type="search" className=' py-2 px-4 w-full rounded-lg' placeholder='Search Products' />
        <div className='display-cards h-full overflow-y-scroll no-scrollbar'>
          {
            products.length
            ?
            products.map((p) => <AdminProductCard key={p._id} product={p} />)
            :
            [...Array(3)].map( (v, i) => <ProductCardSkeleton key={i}/> )
          }
        </div>

        <Modal 
        compo={<EditProduct type='add'/>}
        showModal={showModal}
        setShowModal={setShowModal}
        />
    </AdminLayout>
  )
}

export default Page