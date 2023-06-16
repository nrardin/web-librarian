import React, { useState } from "react";

interface TextInputProps {
  onSubmit: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text..."
          className="message-text"
        />
        <button type="submit" className="send-button rounded-xl">
          Submit
        </button>
      </form>
      <style jsx>
        {`
          .send-button {
            padding: 5px 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
          }

          .message-text {
            margin: 0;
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default TextInput;
