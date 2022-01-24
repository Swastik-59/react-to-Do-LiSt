import React from "react";

function Todoitem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ cursor: "pointer" }}>{props.text}</li>
    </div>
  );
}

export default Todoitem;
