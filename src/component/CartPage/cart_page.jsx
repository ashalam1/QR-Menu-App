import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../Popup";

const CartPage = ({ items, onRemove }) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };
  const handleContinue = () => {
    setIsPopupOpen(true); // Open the popup when Continue is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const handleOrder = (orderDetails) => {
    console.log("Order placed with details:", orderDetails);
    // Logic to handle the order (e.g., sending data to backend)
  };
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="flex flex-col h-screen p-4  text-yellow-400">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div onClick={handleBack} className="cursor-pointer">
          <i className="fas fa-arrow-left fa-lg"></i>
        </div>
        <h1 className="text-xl font-bold text-center">Cart</h1>
        <div className="w-8"></div> {/* Empty div for spacing */}
      </div>

      {/* Items in Cart */}
      <div className="flex-grow flex flex-col items-center justify-center">
        {items.length === 0 ? (
          <div className="text-center">
            <i className="fas fa-shopping-cart fa-3x mb-2"></i>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-600 py-2 w-3/4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md mr-2"
              />
              <div className="flex flex-col w-1/2">
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>

              <button
                onClick={() => onRemove(index)}
                className="bg-yellow-500 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300"
              >
                <i className="fas fa-trash fa-lg"></i>{" "}
                {/* Icon color set to black */}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Total Amount and Start Shopping Button */}
      {items.length > 0 && (
        <div className="flex flex-col items-center mt-4">
          <div className="text-lg font-bold">Total: ₹{totalAmount}</div>
          <button
            onClick={handleContinue}
            className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded-md"
          >
            Continue
          </button>
        </div>
      )}

      {items.length === 0 && (
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={handleBack}
            className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded-md"
          >
            Start Shopping
          </button>
        </div>
      )}
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onOrder={handleOrder}
      />
    </div>
  );
};

export default CartPage;
