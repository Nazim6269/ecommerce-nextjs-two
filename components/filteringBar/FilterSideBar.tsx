"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterSidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const hadnleFilterChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, nextSibling } = e.target;

    const params = new URLSearchParams(searchParams);
    params.set(name, nextSibling?.textContent ?? value);
    console.log(params);

    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-6">
      {/* Filter Header */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>

      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Categories</h3>
        <ul className="space-y-2">
          {["bag", "shoes", "sunglass", "jacket"].map((category) => (
            <li key={category}>
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  name="category"
                  className="w-4 h-4 text-blue-500 mr-2"
                  onChange={hadnleFilterChage}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Price Range</h3>
        <div className="space-y-4">
          {/* Min and Max Price Inputs */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <label htmlFor="minPrice" className="text-gray-700 font-medium">
                Min:
              </label>
              <input
                type="number"
                id="minPrice"
                name="min"
                className="w-20 border border-gray-300 rounded-md px-2 py-1"
                onChange={hadnleFilterChage}
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="maxPrice" className="text-gray-700 font-medium">
                Max:
              </label>
              <input
                type="number"
                name="max"
                id="maxPrice"
                className="w-20 border border-gray-300 rounded-md px-2 py-1"
                onChange={hadnleFilterChage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Ratings</h3>
        <ul className="space-y-2">
          {["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆"].map((rating, index) => (
            <li key={index}>
              <label className="flex items-center text-gray-600">
                <input type="radio" name="rating" className="w-4 h-4 mr-2" />
                {rating}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Brand Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Brands</h3>
        <ul className="space-y-2">
          {["Apple", "Samsung", "Sony", "Nike"].map((brand) => (
            <li key={brand}>
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  name="brands"
                  value={brand}
                  className="w-4 h-4 text-blue-500 mr-2"
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply and Reset Buttons */}
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600">
          Apply Filters
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300">
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
