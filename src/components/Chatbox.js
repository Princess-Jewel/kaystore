import React, { useState } from "react";
import chatIcon from "../assets/images/chatbox.svg";

const Chatbox = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-8 flex items-center space-x-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Hover Text */}
      {hover && (
        <div className="bg-white text-black text-base px-3 py-2 rounded-md shadow-lg font-custom4">
          Chat With Us 👋
        </div>
      )}

      {/* Chatbox Icon */}
      <div className="w-[77px] h-[75px]">
        <img
          src={chatIcon}
          alt="Chat Icon"
          className="w-full h-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Chatbox;
