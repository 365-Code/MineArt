import React, { useState } from 'react'

const Quantity = ({Qty}: {Qty?: number}) => {
    const [qty, setQty] = useState((Qty || 1));

  const handleQty = (q: number) => {
    if (qty + q >= 1 && qty + q <= 20) {
      setQty(qty + q);
    }
  };
  return (
    
    <div className="flex items-center">
    {/* <i
      className="fi fi-sr-square-minus cursor-pointer text-2xl"
      onClick={() => handleQty(-1)}
    /> */}
    <i className="fi fi-rr-square-minus cursor-pointer text-2xl"
      onClick={() => handleQty(-1)}
      />
    <span className="mx-1 flex h-8 w-8 items-center justify-center rounded-lg text-center font-semibold">
      {qty}
    </span>
    <i
      className="fi fi-sr-square-plus cursor-pointer text-2xl text-blue-600"
      onClick={() => handleQty(1)}
    />
    {qty == 20 && (
      <span className="px-4 text-xs font-bold text-red-500">
        Max Limit Reached
      </span>
    )}
  </div>
  )
}

export default Quantity