import React, { useState } from "react";
import TextInput from "./texInput";

interface ChatBoxProps {
  messages: string[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <div className="chatbox">
      <div className="message-container chat chat-start">
        {messages.map((message, index) => (
          <div key={index} className="message chat-bubble">
            <p className="message-text">{message}</p>
          </div>
        ))}
      </div>
      <div className="input-container"></div>
      <style jsx>{`
        /* Styles for the chatbox */
        .chatbox {
          display: flex;
        }

        .message-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .message {
          background-color: #218aff;
          padding: 5px;
          border-radius: 5px;
        }

        .message-text {
          margin: 0;
          color: #fdfdfd;
        }

        .message-timestamp {
          font-size: 12px;
          color: #999;
          margin: 0;
        }

        .input-container {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .input-field {
          flex: 1;
          padding: 5px;
        }

        .send-button {
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ChatBox;
