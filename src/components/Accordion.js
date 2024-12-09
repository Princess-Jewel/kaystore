import React, { useState } from "react";
import open from "../assets/images/arrow-left-01.svg";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What can Kaystore chatbot help me with?",
      answer: "The Kaystore chatbot can assist with tasks like order tracking, editing your orders, and answering frequently asked questions about our services. It's designed to streamline your experience on our platform and provide instant support.",
    },
    {
      question: "How do I access the Kaystore chatbot?",
      answer:
        "You can access the Kaystore chatbot by clicking the chat icon located in the bottom-right corner of any page on our website. It's available 24/7 to assist you.",
    },
    {
      question: "Can the Kaystore chatbot handle bulk order requests?",
      answer: "Yes, the Kaystore chatbot can guide you through the bulk order process. Simply type 'bulk order' and it will ask for details like product categories, quantities, and delivery preferences. It can also connect you with a sales representative if needed.",
    },
    {
      question: " Is the Kaystore chatbot available after business hours?",
      answer: "Absolutely! Our Kaystore chatbot operates 24/7. While it can handle most inquiries at any time, if a question requires human intervention, it will forward your request to our support team, who will respond during business hours.",
    },
    {
      question: "Is my information secure when using the Kaystore chatbot?",
      answer: "Yes, your privacy and data security are our top priorities. The Kaystore chatbot is integrated with secure systems and adheres to strict data protection standards to ensure your information is safe.",
    }
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
