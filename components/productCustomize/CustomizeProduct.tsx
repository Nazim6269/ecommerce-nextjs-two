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

  // handle selected function
  const handleClick = (optionName: string, choiceDesc: string) => {
    setSelectedOption((prev) => ({ ...prev, [optionName]: choiceDesc }));
  };

  //check variant is available in stock
  const isVariantStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity > 0
      );
    });
  };
  return (
    <div className="flex flex-col gap-6">
      {/* Static Product Option */}
      {productOptions?.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              // check the is it disabled
              const disabled = !isVariantStock({
                ...selectedOption,
                [option.name!]: choice.description!,
              });

              //check is it selected
              const selected =
                selectedOption[option.name!] === choice.description;
              const clickHandler = disabled
                ? undefined
                : () => handleClick(option.name!, choice.description!);
              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-nazim text-nazim rounded-md py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
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
