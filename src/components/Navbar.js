import React, { useState } from "react";
import logo from "../assets/images/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#171717] shadow-md relative z-40">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <a href="/">
          <img src={logo} alt="Logo" className="h-8" />
        </a>
      </div>

      {/* Hamburger Icon (Mobile View) */}
      <div
        className="md:hidden flex items-center cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <div className=" text-[24px] text-white font-medium">X</div>
        ) : (
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="block w-full h-[3px] bg-white"></span>
            <span className="block w-full h-[3px] bg-white"></span>
            <span className="block w-full h-[3px] bg-white"></span>
          </div>
        )}
      </div>

      {/* Navigation Links (Desktop View) */}
      <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
        <li>
          <a href="/" className="hover:text-[#F47820] transition">
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-[#F47820] active:text-[#F47820] transition"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-[#F47820] active:text-[#F47820] transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/faq"
            className="hover:text-[#F47820] active:text-[#F47820] transition"
          >
            FAQ
          </a>
        </li>
      </ul>

      {/* Buttons (Desktop View) */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-[#F47820] text-white py-2 px-4 rounded-[10px] hover:bg-white hover:text-[#F47820] transition font-medium text-lg">
          Sign Up
        </button>
        <button className="bg-white text-black py-2 px-4 rounded-[10px] hover:bg-[#F47820] hover:text-white transition font-medium text-lg">
          Request a Demo
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black shadow-md md:hidden z-40">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-white font-custom5 text-lg">
            <li>
              <a
                href="/"
                className="hover:text-[#F47820] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="hover:text-[#F47820] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#F47820] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-[#F47820] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="flex flex-col space-y-4 px-6 pb-4">
            <button className="bg-[#F47820] text-white py-2 px-4 rounded-[10px] hover:bg-white hover:text-[#F47820] transition font-custom5 text-lg">
              Sign Up
            </button>
            <button className="bg-white text-black py-2 px-4 rounded-[10px] hover:bg-[#F47820] hover:text-white transition font-custom5 text-lg">
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
