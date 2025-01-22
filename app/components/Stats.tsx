"use client";

import React from "react";
import img from "../../public/hot-deal.jpg";
import { motion } from "framer-motion";

function Stats() {
  return (
    <div>
      <motion.div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="m-10">
            <h1 className="text-5xl m-10 font-bold mb-2">
              Over <p className="text-orange-500">500</p>
            </h1>
            <p className="text-2xl">DISHES SERVED</p>
          </div>
          <div className="m-10">
            <h1 className="text-5xl m-10 font-bold mb-2">
              Over <p className="text-orange-500">3000</p>
            </h1>
            <p className="text-2xl">HAPPY CUSTOMERS</p>
          </div>
          <div className="m-10">
            <h1 className="text-5xl m-10 font-bold mb-2">
              Over <p className="text-orange-500">1500</p>
            </h1>
            <p className="text-2xl">CUP OF COFFIES</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Stats;
