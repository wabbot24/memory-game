import React from "react";
import "./navbar.css"

function Navbar(props) {
    return (
        <nav className="container">
            <span className="title">Simpson's Memory Game</span>
            <span className="message">{props.message} Click an image!</span>
            <span className="score" id="currentScore">Your Score: {props.score} | Top Score: {props.topScore}</span>
        </nav>
    );
}

export default Navbar;