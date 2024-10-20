import React, { useState } from "react";
import FoodCard from "../component/card/card";

const HomePage = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const foodData = [
    {
      id: 1,
      image: "/images/baked-chicken-drumstick.avif",
      name: "Baked Chicken Drumstick",
      price: 400,
      category: "Non-Veg",
    },
    {
      id: 2,
      image: "/images/chicken_tikka.avif",
      name: "Chicken Tikka",
      price: 180,
      category: "Non-Veg",
    },
    {
      id: 3,
      image: "images/chicken_biryani.avif",
      name: "Chicken Biryani",
      price: 200,
      category: "Non-Veg",
    },
    {
      id: 4,
      image: "/images/paneer-butter-masala.avif",
      name: "Paneer Butter Masala",
      price: 200,
      category: "Veg",
    },
    {
      id: 5,
      image: "/images/chicken_sandwich.avif",
      name: "Chicken Sandwich",
      price: 120,
      category: "Non-Veg",
    },
    {
      id: 6,
      image: "/images/Wheat_Roti.avif",
      name: "Wheat Roti",
      price: 10,
      category: "Veg",
    },
    {
      id: 7,
      image: "/images/Tandoori_Roti.avif",
      name: "Tandoori Roti",
      price: 20,
      category: "Veg",
    },
    {
      id: 8,
      image: "/images/cocktail-mojito.avif",
      name: "Cocktail Mojito",
      price: 200,
      category: "Drinks",
    },
  ];

  const categories = ["All", "Veg", "Non-Veg", "Drinks"];

  const filteredFoodData =
    selectedCategory === "All"
      ? foodData
      : foodData.filter((food) => food.category === selectedCategory);

  return (
    <div className="flex flex-col items-center">
      {/* Category Tabs */}
      <div className="flex space-x-4 my-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-black"
            } px-4 py-2 rounded-full`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredFoodData.map((food) => (
          <FoodCard
            key={food.id}
            image={food.image}
            name={food.name}
            price={food.price}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
