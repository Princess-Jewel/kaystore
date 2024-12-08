import React from "react";
// Replace with your icons or images
import serviceIcon1 from "../assets/images/Frame 2147223586.svg";
import serviceIcon2 from "../assets/images/Frame 2147223585.svg";
import serviceIcon3 from "../assets/images/Frame 2147223584.svg";

const ServicesSection = () => {
  return (
    <section className="bg-white py-28 px-4">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-[1.5rem] md:text-[2.7rem] font-custom1 mb-16">Our Services</h1>

        {/* Services */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Service Box 1 */}
          <div className="flex flex-col text-white items-center bg-black px-4 py-10  rounded-[10px] shadow-md w-[401px] lg:gap-3 gap-2 ">
            <div className="w-[76px] h-[76px]">
              <img
                src={serviceIcon1}
                alt="Service 1"
                className="w-full h-full"
              />
            </div>
            <h4 className="lg:text-2xl font-custom4 text-xl">
              Bulk ordering capabilities
            </h4>
            <p className="md:w-[221px] lg:text-base text-sm font-custom5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          {/* Service Box 2 */}
          <div className="flex flex-col items-center bg-[#F47820] px-4 py-10  rounded-[10px] shadow-md w-[401px]  lg:gap-3 gap-2">
            <div className="w-[76px] h-[76px]">
              <img
                src={serviceIcon2}
                alt="Service 2"
                className="w-full h-full"
              />
            </div>
            <h4 className="lg:text-2xl font-custom4 text-xl">Custom pricing</h4>
            <p className="md:w-[221px] lg:text-base text-sm font-custom5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          {/* Service Box 3 */}
          <div className="flex flex-col text-white items-center bg-black px-4 py-10 rounded-[10px] shadow-md w-[401px] lg:gap-3 gap-2">
            <div className="w-[76px] h-[76px]">
              <img
                src={serviceIcon3}
                alt="Service 3"
                className="w-full h-full"
              />
            </div>
            <h4 className="lg:text-2xl text-xl font-custom4">Fast delivery</h4>
            <p className="md:w-[221px] lg:text-base text-sm font-custom5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
