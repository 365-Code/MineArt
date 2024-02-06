import React, { useState } from "react";

const Quantity = ({ Qty, minQty, handleChangeQty }: { Qty?: number; minQty?: number, handleChangeQty?: any}) => {
  const [qty, setQty] = useState(Qty || 1);

  const handleQty = (q: number) => {
    if (qty + q >= (minQty || 1) && qty + q <= 150) {
      setQty(qty + q);
      handleChangeQty && handleChangeQty(qty+q)
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center">

      <i
        className="fi fi-rr-square-minus cursor-pointer text-2xl"
        onClick={() => handleQty(-1)}
      />
      <span className="mx-1 flex h-8 w-8 items-center justify-center rounded-lg text-center font-semibold">
        {Qty || qty}
      </span>
      <i
        className="fi fi-sr-square-plus cursor-pointer text-2xl text-blue-600"
        onClick={() => handleQty(1)}
      />
      </div>

      {/* <i 
        className="fi fi-rs-plus cursor-pointer text-2xl border border-black p-2"
        onClick={()=>handleQty(1)}
      /> */}
      {qty == 500 && (
        <span className="text-right text-xs font-bold text-red-500">
          Max Limit Reached
        </span>
      )}
    </div>
  );
};

export default Quantity;
