import React, { useState } from "react";
import logo from "../assets/rainhackers-logotype.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="bg-transparent shadow min-h-[80px]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <a href="/">
              <img className="w-auto h-12" src={logo} alt="Rainhackers Logo" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a
              className="py-4 px-2 text-gray-500 hover:text-gray-800"
              href="#about"
            >
              Key Principles
            </a>
            <a
              className="py-4 px-2 text-gray-500 hover:text-gray-800"
              href="##pitchdeck"
            >
              Pirch Deck
            </a>
            <a
              className="py-4 px-2 text-gray-500 hover:text-gray-800"
              href="#impressum"
            >
              Impressum
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="text-gray-800 hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md"
              onClick={handleMobileMenuToggle}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden md:space-x-1 transition duration-300 ease-in-out transform origin-top bg-white rounded-md w-48 absolute top-16 right-0 z-50`}
      >
        <a
          className="block py-2 px-4 text-gray-500 hover:text-gray-800 rounded-t-md"
          href="#about"
        >
          Key Principles
        </a>
        <a
          className="block py-2 px-4 text-gray-500 hover:text-gray-800"
          href="##pitchdeck"
        >
          Pitch Deck
        </a>
        <a
          className="block py-2 px-4 text-gray-500 hover:text-gray-800 rounded-b-md"
          href="#impressum"
        >
          Impressum
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
