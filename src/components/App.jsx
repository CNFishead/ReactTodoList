import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(event) {
    const value = event.target.value;

    setInput(value);
  }
  function handleClick() {
    setItems((prevValues) => {
      return [...prevValues, input];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          name="lItem"
          placeholder="Add item here"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
