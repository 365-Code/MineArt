"use client"
import React, { useEffect, useState } from 'react'

const RangeSelector = ({min, max}: {min?: number, max: number}) => {

    const [price, setPrice] = useState(0)
    const [translate, setTranslate] = useState(0)

    useEffect(() => {
        const priceSelector = document.getElementById('price-selector')
        // if(priceSelector){
        //     const rate = (price/max)*240
        //     priceSelector.style.transform = `translate(${rate}px)`
        // }
        if(priceSelector){
            priceSelector.ontouchmove
            priceSelector.ondrag = () => {
                console.log('blue');
            }
        }
    }, [price])

  return (
    <div>

        {/* <div className='w-[250px] h-2 relative flex border items-center bg-pink-900'>
            <div id='price-selector' className={`transition-all translate-x-0 w-4 h-4 rounded-full cursor-pointer bg-black text-left`}></div>
        </div> */}

        <input id='price-selector' type="range" value={price} min={0} max={max} step={50} onChange={(e: any) => setPrice(e.target.value)} className='w-full'/>

    </div>
  )
}

export default RangeSelector




// import React from "react";

// const RangeSelector = () => {
//   return (
//     <div className="m-auto flex h-32 w-64 items-center justify-center">
//       <div className="relative min-w-full py-1">
//         <div className="h-2 rounded-full bg-gray-200">
//           <div
//             className="absolute h-2 w-0 rounded-full bg-teal-600"
//             style={ {width : "24.1935%", left :"11.2903%"}}
//           ></div>
//           <div
//             className="left-[11.2903%] absolute top-0 -ml-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow"
//             unselectable="on"
//             onSelectCapture={()=> false}
//           >
//             <div className="relative -mt-2 w-1">
//               <div
//                 className="ml-[-25px] bottom-100 absolute left-0 z-40 mb-2 min-w-full opacity-100"
//               >
//                 <div className="relative shadow-md">
//                   <div className="-mt-8 truncate rounded bg-black px-4 py-1 text-xs text-white">
//                     $ 15
//                   </div>
//                   <svg
//                     className="top-100 absolute left-0 h-2 w-full text-black"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 255 255"
//                     xmlSpace="preserve"
//                   >
//                     <polygon
//                       className="fill-current"
//                       points="0,0 127.5,127.5 255,0"
//                     ></polygon>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="absolute top-0 -ml-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow"
//             unselectable="on"
//             onSelectCapture={() => false}
//             style={{left: "35.4839%"}}
//           >
//             <div className="relative -mt-2 w-1">
//               <div
//                 className="bottom-100 absolute left-0 z-40 mb-2 min-w-full opacity-100"
//                 style={{marginLeft: "-25px"}}
//               >
//                 <div className="relative shadow-md">
//                   <div className="-mt-8 truncate rounded bg-black px-4 py-1 text-xs text-white">
//                     $ 30
//                   </div>
//                   <svg
//                     className="top-100 absolute left-0 h-2 w-full text-black"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 255 255"
//                     xmlSpace="preserve"
//                   >
//                     <polygon
//                       className="fill-current"
//                       points="0,0 127.5,127.5 255,0"
//                     ></polygon>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 -mb-6 -ml-1 text-gray-800">
//             $ 8
//           </div>
//           <div className="absolute bottom-0 right-0 -mb-6 -mr-1 text-gray-800">
//             $ 70
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RangeSelector;
