import React, { useState } from "react";
import chatIcon from "../assets/images/chatbox.svg";
import ChatModel from "./ChatModel";

const Chatbox = () => {
  const [hover, setHover] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatModal = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed lg:bottom-8 bottom-0 right-2 flex flex-col items-end z-50">
      {/* Chat Modal */}
      {isChatOpen && (
        <ChatModel />
      )}

      {/* Hover Text */}
      {hover && !isChatOpen && (
        <div className="bg-white text-black text-base px-3 py-2 rounded-md shadow-lg font-custom4 absolute bottom-[15px] right-[90px] whitespace-nowrap">
          Chat With Us 👋
        </div>
      )}

      {/* Chatbox Icon */}
      <div
        className="w-[77px] h-[75px] cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={toggleChatModal}
      >
        <img src={chatIcon} alt="Chat Icon" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Chatbox;
