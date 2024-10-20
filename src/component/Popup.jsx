import React, { useState } from "react";

const Popup = ({ isOpen, onClose, onOrder }) => {
  const [tableNumber, setTableNumber] = useState("");
  const [orderType, setOrderType] = useState("Dine-in");

  const handleOrder = () => {
    // Call the onOrder function with the selected options
    onOrder({ tableNumber, orderType });
    onClose(); // Close the popup after ordering
  };

  if (!isOpen) return null; // If popup is not open, return nothing

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Order Options</h2>

        {/* Table Number Input */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Table Number (Optional for Takeaway)</label>
          <input
            type="number"
            className="border rounded-lg w-full p-2"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            placeholder="Enter table number"
            disabled={orderType === "Takeaway"} // Disable table number input if Takeaway is selected
          />
        </div>

        {/* Order Type Options */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Order Type</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Dine-in"
                checked={orderType === "Dine-in"}
                onChange={(e) => setOrderType(e.target.value)}
                className="mr-2"
              />
              Dine-in
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Takeaway"
                checked={orderType === "Takeaway"}
                onChange={(e) => setOrderType(e.target.value)}
                className="mr-2"
              />
              Takeaway
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleOrder}
            className="bg-yellow-500 text-black px-4 py-2 rounded-md"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
