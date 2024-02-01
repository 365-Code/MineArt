import Link from "next/link";
import React from "react";

const Pagination = ({
  pages,
  currentPage,
  setCurrentPage,
}: {
  pages: any;
  currentPage: any;
  setCurrentPage: any;
}) => {
  const handlePage = (n: number) => {
    if (currentPage + n >= 1 && currentPage + n <= pages) {
      setCurrentPage(currentPage + n);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 pt-6">
      <Link href={"#header"}>
        <i
          onClick={() => handlePage(-1)}
          className="fi fi-rs-arrow-left icons hover:-translate-x-1"
        />
      </Link>
      <span
        onClick={() => setCurrentPage(1)}
        className={`${
          currentPage == 1 && "bg-black text-white"
        } flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-black font-semibold hover:bg-slate-900 hover:text-white ${
          currentPage == 1 && "border-2"
        }`}
      >
        1
      </span>
      {currentPage > 2 && "..."}
      {currentPage > 1 && currentPage < pages && (
        <span
          className={`
          flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-black font-semibold hover:bg-slate-900 hover:text-white ${
            currentPage != pages && "bg-black text-white"
          }`}
        >
          {currentPage}
        </span>
      )}
      {currentPage < pages - 1 && "..."}
      {pages > 1 && (
        <a
          href="#header"
          onClick={() => setCurrentPage(pages)}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-black font-semibold hover:bg-slate-900 hover:text-white ${
            currentPage == pages && "bg-black text-white"
          }`}
        >
          {pages}
        </a>
      )}
      <Link href={"#header"}>
        <i
          onClick={() => handlePage(1)}
          className="fi fi-rs-arrow-right icons hover:translate-x-1"
        />
      </Link>
    </div>
  );
};

export default Pagination;
