import React from "react";
import "./style.css";

function Arrow(props) {
  let direction = props.left ? "left" : "right"
  let arrowDir = props.left ? "<" : ">"

  return (
    <div>
      <button direction={direction}>{arrowDir}</button>
    </div>
  );
}

export default Arrow;
