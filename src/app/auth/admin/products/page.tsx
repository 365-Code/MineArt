"use client"
import AdminLayout from '@/components/AdminLayout'
import ProductCard from '@/components/ProductCard'
import { fetchProducts } from '@/redux/features/productSlice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Page = () => {

  const dispatch = useDispatch<AppDispatch>()
  
  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/getAllProducts");
      const res = await result.json();
      if (res.success) {
        dispatch(fetchProducts(res.products))
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
        <div className='display-cards h-full justify-items-center overflow-y-scroll no-scrollbar'>
        {
          products.map((p) => <ProductCard key={p._id} product={p} />)
        }
        </div>
    </AdminLayout>
  )
}

export default Page