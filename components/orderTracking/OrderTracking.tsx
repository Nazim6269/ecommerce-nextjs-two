const OrderTracking = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Order Details Section */}
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Order #12345</h2>
        <p className="text-sm text-gray-500">Placed on: December 12, 2024</p>
        <p className="text-sm text-gray-500">
          Expected Delivery: December 20, 2024
        </p>
      </div>

      {/* Tracking Progress */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Tracking Progress
      </h3>
      <div className="space-y-4">
        {/* Tracking Steps */}
        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
            ✓
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-700">Order Placed</p>
            <p className="text-sm text-gray-500">
              Your order has been successfully placed.
            </p>
            <p className="text-xs text-gray-400">December 12, 2024</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
            ✓
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-700">Order Processed</p>
            <p className="text-sm text-gray-500">
              Your order is being prepared for shipment.
            </p>
            <p className="text-xs text-gray-400">December 14, 2024</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
            ✓
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-700">Shipped</p>
            <p className="text-sm text-gray-500">
              Your order is on its way to your delivery address.
            </p>
            <p className="text-xs text-gray-400">December 16, 2024</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center">
            <span className="text-gray-500">4</span>
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-700">Out for Delivery</p>
            <p className="text-sm text-gray-500">
              Your package is out for delivery.
            </p>
            <p className="text-xs text-gray-400">
              Estimated: December 20, 2024
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center">
            <span className="text-gray-500">5</span>
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-700">Delivered</p>
            <p className="text-sm text-gray-500">
              Your package will be marked as delivered after arrival.
            </p>
            <p className="text-xs text-gray-400">Pending</p>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="mt-8 border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Order Summary
        </h3>
        <ul className="space-y-2">
          <li className="flex justify-between text-gray-600">
            <span>Item 1</span>
            <span>$20.00</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Item 2</span>
            <span>$15.00</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>$5.00</span>
          </li>
        </ul>
        <div className="flex justify-between font-semibold text-gray-700 mt-2">
          <span>Total</span>
          <span>$40.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
