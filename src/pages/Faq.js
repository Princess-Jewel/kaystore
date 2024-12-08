import React from "react";
import FAQAccordion from "../components/Accordion";

const Faq = () => {
  return (
    <div className="container mx-auto px-6 pb-16 pt-24">
      <h1 className=" text-[1.5rem] lg:text-[2.7rem] text-[#F47820] text-center mb-6 font-custom4">
        Kaystore FAQs
      </h1>
      <FAQAccordion />
    </div>
  );
};

export default Faq;
