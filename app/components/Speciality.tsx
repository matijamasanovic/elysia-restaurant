import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faBlenderPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhiskeyGlass } from "@fortawesome/free-solid-svg-icons";

function Speciality() {
  return (
    <div className="max-w-[75rem] m-auto">
      <div>
        <h1 className="text-center mt-5 text-4xl">Speciality</h1>
        <hr className="border-orange-500 rounded-xl border-[3px] max-w-12 mx-auto mt-5" />
      </div>
      <div className="block md:flex justify-center">
        <div className="m-10 text-center">
          <FontAwesomeIcon
            icon={faUtensils}
            className="w-16 h-16 mb-7 text-orange-500 mx-auto"
          />
          <h1 className="font-bold text-2xl">Dinner & Dessert</h1>
          <p>
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power.
          </p>
        </div>

        <div className="m-10 text-center">
          <FontAwesomeIcon
            icon={faMugSaucer}
            className="w-16 h-16 mb-7 text-orange-500 mx-auto"
          />
          <h1 className="font-bold text-2xl">Breakfast</h1>
          <p>
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power.
          </p>
        </div>

        <div className="m-10 text-center">
          <FontAwesomeIcon
            icon={faBlenderPhone}
            className="w-16 h-16 mb-7 text-orange-500 mx-auto"
          />
          <h1 className="font-bold text-2xl">Smoothie</h1>
          <p>
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power.
          </p>
        </div>

        <div className="m-10 text-center">
          <FontAwesomeIcon
            icon={faWhiskeyGlass}
            className="w-16 h-16 mb-7 text-orange-500 mx-auto"
          />
          <h1 className="font-bold text-2xl">Beverages</h1>
          <p>
            you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
            adipiscing onsectetur Graphic Power.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Speciality;
