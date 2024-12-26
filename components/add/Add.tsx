"use client";

import { addToCartInMongo } from "@/lib/dbQuery";
import { Product } from "@/types/type";
import React, { useState } from "react";

const Add: React.FC<{
  variantStockNumber: number;
  variantId: string;

  product: Product;
}> = ({ variantStockNumber, variantId, product }) => {
  const [quantity, setQuantity] = useState(1);

  //TODO: error in adding item in cart
  const addToCart = async () => {
    const res = await addToCartInMongo(quantity, product, variantId);
    if (res.success) console.log(res?.message);
  };

  return (
    <div className="mt-6 ">
      {/* Change quantity */}
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex my-3 justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => setQuantity((prev) => prev - 1)}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => setQuantity((prev) => prev + 1)}
              disabled={quantity === variantStockNumber}
            >
              +
            </button>
          </div>
          {variantStockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <div className="text-md">
              Only{" "}
              <span className="text-orange-500">
                {variantStockNumber} items
              </span>{" "}
              left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>
      </div>

      {/* Adding in cart section */}
      <div className="flex gap-2">
        {/* Add to whishlist button */}
        <a
          href="#"
          title=""
          className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          role="button"
        >
          <svg
            className="w-5 h-5 -ms-2 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
            />
          </svg>
          Add to favorites
        </a>
        {/* Add to cart button */}
        <button
          title=""
          className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
          type="submit"
          onClick={addToCart}
        >
          <svg
            className="w-5 h-5 -ms-2 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Add;
