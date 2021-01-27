import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const handleInputChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="title"
        className="input-text"
        placeholder="Enter title"
        value={inputText.title}
        onChange={handleInputChange}
      />
      <button className="input-submit">
        <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
      </button>
    </form>
  );
};

export default InputTodo;
