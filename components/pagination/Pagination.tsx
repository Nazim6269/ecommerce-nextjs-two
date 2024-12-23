"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="w-full flex justify-between px-2">
      <button
        type="button"
        className="capitalize rounded-lg text-white bg-primary-500 px-5 py-2.5 text-sm font-medium  focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 hover:bg-gray-200 hover:text-primary-600 disabled:bg-gray-200 disabled:text-black"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        prev
      </button>
      <button
        type="button"
        className="capitalize rounded-lg text-white bg-primary-500 px-5 py-2.5 text-sm font-medium  focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 hover:bg-gray-200 hover:text-primary-600 disabled:bg-gray-200 disabled:text-black"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
