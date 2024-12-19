"use client";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Static Product Option */}
      <div className="flex flex-col gap-4">
        <h4 className="font-medium">Choose a Color</h4>
        <ul className="flex items-center gap-3">
          <li className="w-8 h-8 rounded-full ring-1 bg-orange-600 ring-gray-300"></li>
          <li className="w-8 h-8 rounded-full ring-1 bg-green-500 ring-gray-300"></li>
          <li className="w-8 h-8 rounded-full ring-1 bg-blue-600 ring-gray-300"></li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
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
      </div>
    </div>
  );
};

export default CustomizeProducts;
