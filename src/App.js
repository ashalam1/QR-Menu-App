import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./component/NavBar/top_nav";
import CartPage from "./component/CartPage/cart_page.jsx";
import FeedbackForm from "./component/Feedback/feedbackform.jsx";
import HomePage from "./component/HomePage.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);


  return (
    <Router>
      <div>
        <TopNavbar cartItems={cartItems.length} />
        <Routes>
          <Route
            path="/CartPage"
            element={
              <CartPage
                items={cartItems}
                onRemove={handleRemoveFromCart}
                totalAmount={totalAmount}
                onContinue={() => console.log("Continue clicked")}
              />
            }
          />
          <Route path="/FeedbackPage" element={<FeedbackForm />} />
          <Route
            path="/"
            element={<HomePage onAddToCart={handleAddToCart} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
