"use client";

import React, { useState, useEffect } from "react";
import OrderModal from "./OrderModal";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        <div
          className={`navbar fixed top-0 left-0 w-full z-20 ${
            isScrolled ? "bg-black bg-opacity-50" : "bg-transparent"
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white" // Added text-white class to make the icon white
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {isMenuOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="font-bold text-black">Blog</a>
                  </li>
                  <li>
                    <a className="font-bold text-black">Booking</a>
                    <ul className="p-2">
                      <li>
                        <a className="font-bold text-black">Order</a>
                      </li>
                      <li>
                        <a className="font-bold text-black">Reservation</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="font-bold text-black">Location</a>
                  </li>
                </ul>
              )}
            </div>
            <a className="btn btn-ghost text-xl font-bold text-white">Elysia</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="font-bold text-white">Item 1</a>
              </li>
              <li>
                <details>
                  <summary className="font-bold text-white">Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a className="font-bold text-black">Submenu 1</a>
                    </li>
                    <li>
                      <a className="font-bold text-black">Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="font-bold text-white">Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn font-bold text-black" onClick={openModal}>
              Order now
            </button>
          </div>
        </div>
        <OrderModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </motion.div>
  );
}

export default Header;
