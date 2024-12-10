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
    <div className="fixed bottom-8 right-2 flex flex-col items-end">
      {/* Chat Modal */}
      {isChatOpen && (
        <ChatModel />
        // <div className="bg-white text-black w-[300px] h-[400px] rounded-lg shadow-lg flex flex-col p-4 absolute bottom-[100px] right-0">
        //   <div className="flex justify-between items-center pb-2 border-b">
        //     <h3 className="font-bold text-lg">Chat With Us</h3>
        //     <button
        //       onClick={toggleChatModal}
        //       className="text-lg font-bold cursor-pointer"
        //     >
        //       X
        //     </button>
        //   </div>
        //   <div className="flex-1 mt-4 overflow-y-auto">
        //     <p className="text-gray-600">Start a conversation...</p>
        //   </div>
        //   <div className="pt-2">
        //     <input
        //       type="text"
        //       placeholder="Type your message..."
        //       className="w-full p-2 border rounded-lg focus:outline-none focus:border-[#F47820]"
        //     />
        //   </div>
        // </div>
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
