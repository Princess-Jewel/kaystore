import React from "react";
import img4 from "../assets/images/image 13.svg";
import img1 from "../assets/images/image 14.svg";
import img3 from "../assets/images/image 15.svg";
import img5 from "../assets/images/image 16.svg";
import img2 from "../assets/images/image 17.svg";

const PartnersSection = () => {
  return (
    <section className="bg-[#F0F2F6] py-28 px-4">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-[1.5rem] md:text-[2.7rem] font-custom1 mb-16">
          Meet some of our trusted partners
        </h1>

        {/* Images */}
        <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-6">
          <div className="w-[182.16px] h-[82.36px]">
            <img src={img1} alt="Partner 1" className="w-full h-full" />
          </div>

          <div className="w-[193.33px] h-[66.06px]">
            <img src={img2} alt="Partner 2" className="w-full h-full" />
          </div>

          <div className="w-[140.92px] h-[75.97px]">
            <img src={img3} alt="Partner 3" className="w-full h-full" />
          </div>

          <div className="w-[177.01px] h-[65.4px]">
            <img src={img4} alt="Partner 4" className="w-full h-full" />
          </div>

          <div className="w-[158.1px] h-[62.36px]">
            <img src={img5} alt="Partner 5" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
