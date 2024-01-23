"use client"
import React, { useState } from 'react'
import FilterCategories from './FilterCategories';
import FilterMaterials from './FilterMaterials';
import RangeSelector from './RangeSelector';

const Filters = () => {
    
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div
    className={`${
      showFilter ? "h-fit md:border-2 py-8 md:p-8" : "h-0 border-none p-0"
    } max-h-fit w-full min-h-fit max-w-full space-y-2 overflow-hidden border-black text-center`}
  >
    <FilterCategories />
    <FilterMaterials />

    <div className="flex flex-col max-w-full sm:flex-row items-center gap-4 justify-center">
      <h3 className="font-semibold">Price Range</h3>
      <RangeSelector min={100} steps={10} max={5000} />
    </div>

  </div>
  )
}

export default Filters