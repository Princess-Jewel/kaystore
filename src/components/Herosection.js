import React from "react";
import hero from "../assets/images/hero.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-20 gap-6 ">
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-custom1  mb-6">
            Streamline Your Business Procurement
            <span className="text-[#F47820]"> Process</span>
          </h1>
          <button className="bg-[#F47820] font-custom1 text-white py-3 px-6 rounded-md text-lg hover:bg-white hover:text-[#F47820] transition">
            Start Shopping
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full max-w-[740px] h-auto">
          <img
            src={hero}
            alt="Hero"
            className="w-full h-auto object-contain md:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
