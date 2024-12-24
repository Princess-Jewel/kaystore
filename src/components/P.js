import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = process.env.REACT_APP_API_KEY;
let first_message;

const ChatModel = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Kennedy. How can I help you today!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    first_message = message;
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    let orderInfo;

    const systemMessage2 = {
      role: "system",
      content: `Extract order Id from this sentence: ${first_message}. 
                    If order id found in sentence, just return the figure. otherwise return a string sentence
                    `,
    };

    const apiRequestBody2 = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage2],
    };

    let order_id;
    let idValid = false;
    let not_found = false;
    if (!idValid) {
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody2),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          if (!isNaN(data.choices[0].message.content)) {
            order_id = data.choices[0].message.content;
            idValid = true;
          }
          setIsTyping(false);
        });
    }

    // get order info
    if (idValid) {
      await fetch(
        "https://kennedy-chatbot-be.exchanger101.com/order/" + order_id,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => {
        
          return data.json();
        })
        .then((data) => {
          if (data.statusCode === 404) {
            not_found = true;
            return;
          }
          orderInfo = data.order;
        });
    }

    let message;
    if (!idValid) {
      message = "Please enter a a valid Id";
    } else if (not_found) {
      message = "Order does not exist";
    } else {
      message = `
                            Order ${orderInfo.id} is "${orderInfo.status}". 
                            It was delivered to "${orderInfo.address}, ${
        orderInfo.postcode
      }". 
                            Estimated arrival time was ${new Date(
                              orderInfo.estimated_arrival_time
                            ).toLocaleString()}.
                            ${
                              orderInfo.delayed
                                ? `Reason for delay: ${orderInfo.reason_for_delay}.`
                                : "No delays reported."
                            }
                        `;
    }

    const systemMessage = {
      role: "system",
      content: `Narrate the following details: ${message}`,
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
  
    <div
    style={{ position: "relative"}}
    className="lg:w-[700px] w-[95%] h-[400px] lg:h-[800px] rounded-[20px] z-50"
  >
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
               className="h-full w-full"
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message}/>;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
    
    </div>
  );
};

export default ChatModel;
