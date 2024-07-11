"use client"
import { setAllProducts } from '@/redux/features/productSlice';
import { AppDispatch } from '@/redux/store';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const FilterMaterials = () => {
  const [materials, setMaterials] = useState([] as Array<string>);
  const [material, setMaterial] = useState('All');
  const nav = useRouter()
  
  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  
  const handleFilters = async () => {
    const searchQuery = searchParams.get("search") || "All";
    const categoryQuery = searchParams.get("category") || "All";
    const query = `search=${searchQuery}&category=${categoryQuery}&material=${material}`;
    try {
      const result = await fetch(`/api/product/searchProducts?${query}`);
      const res = await result.json();
      if (res.success) {
        dispatch(setAllProducts(res.products));
        nav.push(`/products?${query}`)
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    handleFilters();
  }, [material]);

  const fetchAllFilters = async () => {
    try {
      const result = await fetch("/api/product/getFilters");
      const res = await result.json();
      if (res.success) {
        setMaterials(res.materials);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchAllFilters()
  }, [])
    
  return (
    
    <div>
              
    <h3 className="text-lg font-semibold">Material</h3>
    <ul className="no-scrollbar mx-auto flex w-fit max-w-full items-center gap-2 overflow-x-scroll text-center">
      {materials.map((mtrl, i) => (
        <li key={i} className="flex items-center gap-2">
          <span
            onClick={() => setMaterial(mtrl)}
            className={`cursor-pointer whitespace-nowrap px-1 ${
              (mtrl == material) &&
              "font-semibold underline underline-offset-4 drop-shadow"
            } `}
          >
            {mtrl}
          </span>
          { (i != (materials.length - 1)) && (
            <hr className="h-[20px] border border-slate-400" />
          )}
        </li>
      ))}
    </ul>

  </div>
  )
}

export default FilterMaterials