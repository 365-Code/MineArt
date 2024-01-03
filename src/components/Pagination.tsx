import Link from 'next/link'
import React from 'react'

const Pagination = ({pages, currentPage, setCurrentPage}: {pages: any, currentPage: any, setCurrentPage:any}) => {

    const handlePage = (n: number)=>{
        if(currentPage+n >= 1 && currentPage+n<=pages){
            setCurrentPage(currentPage+n)
        }
    }

  return (
    <div className='pt-6 flex justify-center items-center gap-2'>
        
        <Link href={"#header"}>
        <i onClick={()=>(handlePage(-1))} className="fi fi-rs-arrow-left hover:-translate-x-1 icons" />
        </Link>
        <span onClick={()=>setCurrentPage(1)} className={`cursor-pointer hover:bg-slate-900 hover:text-white border border-black w-8 flex items-center justify-center h-8 rounded-lg font-semibold ${currentPage == 1 && "border-2"}`}>1</span>
        {
            currentPage > 2 && "..."
        }
        {
            currentPage >=2 && currentPage < pages &&
            <span className={`cursor-pointer hover:bg-slate-900 hover:text-white border border-black w-8 flex items-center justify-center h-8 rounded-lg font-semibold ${currentPage != pages && "border-2"}`}>{currentPage}</span>
        }
        {
            currentPage < pages - 1 && "..."
        }
        {
            pages > 1 &&
            <a href='#header' onClick={()=>setCurrentPage(pages)} className={`cursor-pointer hover:bg-slate-900 hover:text-white border border-black w-8 flex items-center justify-center h-8 rounded-lg font-semibold ${currentPage == pages && "border-2"}`}>{pages}</a>
        }
        <Link href={"#header"}>
            <i onClick={()=>(handlePage(1))} className="fi fi-rs-arrow-right hover:translate-x-1 icons" />
        </Link>
    </div>
  )
}

export default Pagination