"use client";

import React, { ReactHTMLElement, useState } from "react";

const SortingBar = () => {
  const handleSorting = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div className="flex items-center space-x-4">
      <label className="font-semibold capitalize">sort by</label>
      <div
        className="z-50   mt-2 w-40 divide-y divide-gray-100 rounded-lg dark:bg-gray-700"
        data-popper-placement="bottom"
      >
        <select
          className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
          aria-labelledby="sortDropdownButton"
          onChange={handleSorting}
        >
          <option
            value="default"
            className="px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Default
          </option>
          <option
            value="increasing"
            className="px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Increasing price
          </option>
          <option
            value="decreasing"
            className="px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Decreasing price
          </option>
        </select>
      </div>
    </div>
  );
};

export default SortingBar;
