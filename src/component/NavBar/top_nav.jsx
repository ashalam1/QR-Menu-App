import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNavbar = ({ cartItems }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

   const handleHamburgerClick = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle drawer visibility
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false); // Close drawer
  };

  const handleFeedbackClick = () => {
    navigate("/FeedbackPage");
  }
  const handleCartClick = () => {
    navigate("/CartPage");
  };

  return (
    <div>
    <nav className="flex items-center justify-between p-4 bg-black text-yellow-400">
      <div onClick={handleHamburgerClick} className="cursor-pointer">
        <i className="fas fa-bars fa-lg"></i>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="/images/restaurant-logo.svg"
          width="60"a
          height="20"
          alt="restaurant"
        />
      </div>

      <div className="relative cursor-pointer" onClick={handleCartClick}>
        <i className="fas fa-shopping-cart fa-lg"></i>
        {cartItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-black rounded-full text-xs px-1">
            {cartItems}
          </span>
        )}
      </div>
    </nav>
    {isDrawerOpen && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-70" onClick={handleCloseDrawer}>
        <div className="absolute top-0 left-0 w-64 h-full bg-white text-black p-4">
          <h2 className="text-xl font-bold mb-2">QR Menu App</h2>
          <p className="mb-4">Delight in every bite</p>
          <div className="flex flex-col">
            {/* Add additional menu items or links here */}
            <button className="mt-4 text-yellow-400" onClick={handleFeedbackClick}>
              Give Feedback
            </button>
            <button className="mt-4 text-yellow-400" onClick={handleCloseDrawer}>
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default TopNavbar;
