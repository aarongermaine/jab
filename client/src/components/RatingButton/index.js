import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function RatingButton(props) {
    // console.log(props.state)
    let icon = props.filled ? "★" : "☆";
    function myFunction(e) {
        props.sendRating(props.rating)

    }
    return (
        <div>
            <button onClick={myFunction} data-rating={props.rating}>{icon}</button>
        </div>
    );
}

export default RatingButton;