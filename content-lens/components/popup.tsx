import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ChatBox from "./chatbox";
import TextInput from "./texInput";
import { useState } from "react";

const PopUpComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleTextInputSubmit = (text: string) => {
    setMessages((prevMessages) => [...prevMessages, text]);
  };
  return (
    <Popup
      trigger={
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Open Lens
        </button>
      }
      position="right center"
      modal
      closeOnDocumentClick
      contentStyle={{
        position: "fixed",
        top: "50%",
        right: "10%",
        transform: "translateY(-50%)",
        width: "auto",
        height: "calc(100vh - 200px)",
        borderRadius: "0.5rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ChatBox messages={messages}></ChatBox>
      <TextInput onSubmit={handleTextInputSubmit}></TextInput>
    </Popup>
  );
};

export default PopUpComponent;
