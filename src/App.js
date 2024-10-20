import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./component/NavBar/top_nav";
import Nav from "./component/NavBar/nav.jsx";
import FoodCard from "./component/card/card.jsx";
import CartPage from "./component/CartPage/cart_page.jsx";
import FeedbackForm from "./component/Feedback/feedbackform.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const foodData = [
    {
      id: 1,
      image: "/images/baked-chicken-drumstick.avif",
      name: "Baked Chicken Drumstick",
      price: 400,
    },
    {
      id: 2,
      image: "/images/chicken_tikka.avif",
      name: "Chicken Tikka",
      price: 180,
    },
    {
      id: 3,
      image: "images/chicken_biryani.avif",
      name: "Chicken Biryani.",
      price: 200,
    },
    {
      id: 4,
      image: "/images/paneer-butter-masala.avif",
      name: "Paneer Butter Masala.",
      price: 200,
    },
    {
      id: 5,
      image: "/images/chicken_sandwich.avif",
      name: "Chicken Sandwich",
      price: 120,
    },
    { id: 6, image: "/images/download.jpeg", name: "Food Item 3", price: 200 },
    { id: 6, image: "/images/Wheat_Roti.avif", name: "Wheat Roti", price: 10 },
    { id: 6, image: "/images/Tandoori_Roti.avif", name: "Tandoori Roti", price: 20 },
    { id: 6, image: "/images/cocktail-mojito.avif", name: "Cocktail Mojito", price: 200 },
  ];

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
                totalAmount={totalAmount}
                onContinue={() => console.log("Continue clicked")}
              />
            }
          />
           <Route
            path="/FeedbackPage"
            element={
              <FeedbackForm/>
            }
          />
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {foodData.map((food) => (
                    <FoodCard
                      key={food.id}
                      image={food.image}
                      name={food.name}
                      price={food.price}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
