import React from "react";

function Review() {
  return (
    <div className="flex justify-center items-center-100 py-8">
      <div className="carousel carousel-center bg-white rounded-box max-w-4xl p-6 space-x-4 ">
        <div className="carousel-item">
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              className="w-24 h-24 rounded-full shadow-md mb-4"
              alt="guest-1"
            />
            <p className="font-semibold text-lg">Emily R.</p>
            <p className="text-sm text-gray-600 mt-2">
              "Amazing service! The food was delicious, and the atmosphere was
              perfect for a family dinner."
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="w-24 h-24 rounded-full shadow-md mb-4"
              alt="guest-2"
            />
            <p className="font-semibold text-lg">Michael K.</p>
            <p className="text-sm text-gray-600 mt-2">
              "I was impressed by the quality of the food and the friendly
              staff. Highly recommend this place!"
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              className="w-24 h-24 rounded-full shadow-md mb-4"
              alt="guest-3"
            />
            <p className="font-semibold text-lg">Sophia L.</p>
            <p className="text-sm text-gray-600 mt-2">
              "A fantastic experience! The ambiance was beautiful, and the staff
              went above and beyond."
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              className="w-24 h-24 rounded-full shadow-md mb-4"
              alt="guest-4"
            />
            <p className="font-semibold text-lg">David W.</p>
            <p className="text-sm text-gray-600 mt-2">
              "One of the best dining experiences I've ever had. Will definitely
              come back again!"
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              className="w-24 h-24 rounded-full shadow-md mb-4"
              alt="guest-5"
            />
            <p className="font-semibold text-lg">Olivia P.</p>
            <p className="text-sm text-gray-600 mt-2">
              "Exceptional! The food quality and variety are unmatched. Highly
              recommend this restaurant."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
