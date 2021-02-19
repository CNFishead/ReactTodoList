import React from "react";

function TodoItem(props) {
  return (
    // Apply onClick to div, preference
    <div
      // setup anonymous function, that will call
      // props.onCheck function, ONLY when the div
      // is clicked on.
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      {/* list item, gets text from props */}
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;
