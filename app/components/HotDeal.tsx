"use client";

import React from "react";
import img from "../../public/hot-deal.jpg";
import { motion } from "framer-motion";

function HotDeal() {
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
          <div className="max-w-[50rem]">
            <h1 className="mb-5 text-7xl font-bold">HOT DEAL OF THE DAY</h1>
            <p className="mb-5 text-3xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HotDeal;
