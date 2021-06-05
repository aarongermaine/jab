import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Arrows() {
  return (
    <div>
      <FontAwesomeIcon icon={faAngleLeft} size="5x" pull="left" />
      <FontAwesomeIcon icon={faAngleRight} size="5x" pull="right" />
    </div>
  );
}

export default Arrows;
