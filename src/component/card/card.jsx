import React, { useState } from "react";

const FoodCard = ({ image, name, price, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart({ image, name, price, quantity });
    setIsAdded(true);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 max-w-xs">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600">₹{price}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrease}
            className="px-2 py-1 bg-gray-200 rounded-md"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={handleIncrease}
            className="px-2 py-1 bg-gray-200 rounded-md"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className={`${
          isAdded ? "bg-green-500 text-white" : "bg-yellow-500"
        } text-black w-full px-3 py-1 rounded-md mt-4`}
      >
        <i className="fas fa-shopping-cart fa-lg"></i>{" "}
        {isAdded ? "Added to Cart" : " "}
      </button>
    </div>
  );
};

export default FoodCard;
