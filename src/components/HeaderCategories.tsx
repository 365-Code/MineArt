"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const HeaderCategories = () => {

    const [categories, setCategories] = useState([] as Array<string>)

    const fetchAllFilters = async () => {
        try {
          const result = await fetch("/api/product/getFilters");
          const res = await result.json();
          if (res.success) {
            setCategories(res.categories);
          }
        } catch (error) {
          return error;
        }
      };
    
      useEffect(() => {
        fetchAllFilters()
      }, [])


  return (
    <div className='sm:hidden absolute left-0 text-center gap-2 justify-center w-full no-scrollbar top-full p-2 overflow-x-scroll flex'>
        {
            categories?.map((c, i) => 
                c != 'All' && <Link key={i} href={`/collections/${c}`} className='bg-slate-400 hover:bg-slate-500 text-white w-fit py-1 px-2 rounded-lg'>{c}</Link>
            )
        }

    </div>
  )
}

export default HeaderCategories