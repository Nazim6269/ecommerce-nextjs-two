const FilterSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-6">
      {/* Filter Header */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>

      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Categories</h3>
        <ul className="space-y-2">
          <li>
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
              Electronics
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
              Fashion
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
              Home Appliances
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
              Books
            </label>
          </li>
        </ul>
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Price Range</h3>
        <div className="space-y-2">
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="1000"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Ratings</h3>
        <ul className="space-y-2">
          <li>
            <label className="flex items-center text-gray-600">
              <input type="radio" name="rating" className="w-4 h-4 mr-2" />
              ★★★★★
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="radio" name="rating" className="w-4 h-4 mr-2" />
              ★★★★☆
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="radio" name="rating" className="w-4 h-4 mr-2" />
              ★★★☆☆
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="radio" name="rating" className="w-4 h-4 mr-2" />
              ★★☆☆☆
            </label>
          </li>
        </ul>
      </div>

      {/* Brand Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Brands</h3>
        <ul className="space-y-2">
          <li>
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
              Apple
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
              Samsung
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
              Sony
            </label>
          </li>
          <li>
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 mr-2" />
              Nike
            </label>
          </li>
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
