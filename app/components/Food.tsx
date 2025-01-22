"use client";

import React, { useState } from "react";

function Food() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All food" | "Dinner" | "Dessert" | "Beverage"
  >("All food");

  const foodItems: {
    "All food": string[];
    Dinner: string[];
    Dessert: string[];
    Beverage: string[];
  } = {
    "All food": [
      "Pizza",
      "Burger",
      "Makarona",
      "Cake",
      "Coffee",
      "Salad",
      "Steak",
      "Smoothie",
      "Soup",
    ],
    Dinner: ["Grilled Salmon", "Steak", "Roast Chicken"],
    Dessert: ["Ice Cream", "Brownie", "Cheesecake"],
    Beverage: ["Coffee", "Tea", "Juice", "Smoothie"],
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[20rem] px-4 mt-7 mb-7">
      <div className="max-w-[75rem] text-center">
        <h1 className="text-4xl font-bold mb-4">Our Food</h1>
        <hr className="border-orange-500 border-[3px] rounded-xl max-w-12 mx-auto mb-4" />
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(foodItems).map((category) => (
            <div
              key={category}
              className={`cursor-pointer px-6 py-4 border border-orange-500 rounded-md hover:bg-orange-100 transition duration-300 ${
                selectedCategory === category ? "bg-orange-500 text-white" : ""
              }`}
              onClick={() =>
                setSelectedCategory(
                  category as "All food" | "Dinner" | "Dessert" | "Beverage"
                )
              }
            >
              {category}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems[selectedCategory].map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center border border-gray-300 rounded-lg shadow-md h-40 w-40 bg-white text-lg font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
