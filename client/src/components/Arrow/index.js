import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
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
