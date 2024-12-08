import React, { useState } from "react";
import open from "../assets/images/arrow-left-01.svg";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do i register on kaystore?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "How do i buy on kaystore platform?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "How do i place orders on kaystore?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "How do i check prices on kaystore?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "How can i track my order on kaystore?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "How is the delivery and payment mode of kaystore?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg">
            <div
              className="flex items-center justify-between w-full text-left px-6 py-4 border border-[#D5D5D5] rounded-[10px] text-xl text-black cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <span className="font-custom4">{faq.question}</span>
              <div
                className={`w-[24px] h-[24px] transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
              >
                <img
                  src={open}
                  alt="arrow icon"
                  className="w-full h-full"
                />
              </div>
            </div>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-100 text-lg text-gray-700 font-custom5 rounded-[10px] mt-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
