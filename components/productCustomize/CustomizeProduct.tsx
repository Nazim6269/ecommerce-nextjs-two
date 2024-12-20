"use client";

import { VariantType } from "@/lib/type";
import { products } from "@wix/stores";
import { useState } from "react";

const CustomizeProducts: React.FC<{
  variants: VariantType[];
  productId: string;
  productOptions: products.ProductOption[];
}> = ({ variants, productId, productOptions }) => {
  const [selectedOption, setSelectedOption] = useState<{
    [key: string]: string;
  }>({});

  const handleClick = (optionName: string, choiceDesc: string) => {
    setSelectedOption((prev) => ({ ...prev, [optionName]: choiceDesc }));
  };

  const isVariantStock = (choices: { [key: string]: string }) => {
    variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) && variant.stock.inStock
      );
    });
  };
  return (
    <div className="flex flex-col gap-6">
      {/* Static Product Option */}
      {productOptions?.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          {option.choices?.map((choice) => (
            <ul
              key={choice.value}
              className="flex items-center gap-3"
              onClick={() => handleClick(option.name!, choice.description!)}
            >
              <li>{choice.description}</li>
            </ul>
          ))}
          {/* <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 bg-orange-600 ring-gray-300"></li>
            <li className="w-8 h-8 rounded-full ring-1 bg-green-500 ring-gray-300"></li>
            <li className="w-8 h-8 rounded-full ring-1 bg-blue-600 ring-gray-300"></li>
          </ul> */}
        </div>
      ))}

      {/* <div className="flex flex-col gap-4">
        <h4 className="font-medium">Choose a Size</h4>
        <ul className="flex items-center gap-3">
          <li className="ring-1 ring-gray-300 text-gray-600 rounded-md py-1 px-4 text-sm cursor-pointer">
            Small
          </li>
          <li className="ring-1 ring-gray-300 text-gray-600 rounded-md py-1 px-4 text-sm cursor-pointer">
            Medium
          </li>
          <li className="ring-1 ring-gray-300 text-gray-600 rounded-md py-1 px-4 text-sm cursor-pointer">
            Large
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default CustomizeProducts;
