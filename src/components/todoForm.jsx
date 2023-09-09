import React, { useState, useEffect , useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete : false
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder=" Add a to-do ..."
        value={input}
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-btn">Add</button>
    </form>
  );
}

export default TodoForm;
