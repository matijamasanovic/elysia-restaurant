"use client";

import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <div
        className="hero bg-base-200 min-h-screen"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-content text-left relative z-10 flex justify-center items-center min-h-screen"
        >
          <div className="max-w-[50rem] w-full text-left">
            <h1 className="text-6xl font-bold text-white">
              THE BEST FOOD <br />{" "}
              <p className="text-orange-500 text-6xl">IN TOWN</p>
            </h1>
            <p className="py-6 text-white text-3xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-orange-500 text-white border-none hover:text-orange-500 hover:bg-white text-2xl">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
