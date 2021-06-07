import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function RatingButton(props) {
    return (
        <div>
            <button data-rating={props.rating}>★</button>
        </div>
    );
}

export default RatingButton;