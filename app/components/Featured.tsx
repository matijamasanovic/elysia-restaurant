import React from "react";

function Featured() {
  return (
    <div className="block md:flex justify-between items-center max-w-[75rem] mx-auto p-4">
      <div className="flex-shrink-0">
        <div className="carousel carousel-center bg-white rounded-box max-w-[50rem] space-x-4 p-4">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="rounded-box"
              alt="carousel-1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="rounded-box"
              alt="carousel-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="rounded-box"
              alt="carousel-3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="rounded-box"
              alt="carousel-4"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="rounded-box"
              alt="carousel-5"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="rounded-box"
              alt="carousel-6"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="rounded-box"
              alt="carousel-7"
            />
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 text-center">
        <h1 className="p-2 text-4xl font-bold">OUR MENU</h1>
        <ul className="text-left">
          <li className="flex justify-between mb-1 text-xl p-2 rounded-xl">
            <span>Classic Nachos</span>
            <span>€8.50</span>
          </li>
          <li className="flex justify-between mb-1 text-xl bg-orange-500 text-white p-2 rounded-xl">
            <span>Nachos Grande</span>
            <span>€10.00</span>
          </li>
          <li className="flex justify-between mb-1 text-xl p-2 rounded-xl">
            <span>Avocado Shell Stuffed</span>
            <span>€7.25</span>
          </li>
          <li className="flex justify-between mb-1 text-xl bg-orange-500 text-white p-2 rounded-xl">
            <span>Stuffed Mushroom</span>
            <span>€9.30</span>
          </li>
          <li className="flex justify-between mb-1 text-xl p-2 rounded-xl">
            <span>Baked Potato Jackets</span>
            <span>€6.80</span>
          </li>
          <li className="flex justify-between mb-1 text-xl bg-orange-500 text-white p-2 rounded-xl">
            <span>Mexican Taco</span>
            <span>€8.95</span>
          </li>
          <li className="flex justify-between mb-1 text-xl p-2 rounded-xl">
            <span>Tex-Mex Chicken</span>
            <span>€11.40</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Featured;
