"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch(value);
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <input
      type="text"
      name="name"
      value={search}
      onChange={handleSearch}
      placeholder="Search..."
      className=" p-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
    />
  );
};

export default SearchBar;
