import React from "react";

import "./style.css";

function Arrow(props) {
  let direction = props.left ? "left" : "right"
  let arrowDir = props.left ? "<" : ">"
  // console.log(props.state)
  function myFunction(e) {
    props.changeSong()
    props.generateStars(props.left)
  }

  return (
    <div>
      <button direction={direction} onClick={myFunction}>{arrowDir}</button>
    </div>
  );
}

export default Arrow;
