import React from "react";
import "./navbar.css"

function Navbar(props) {
    return (
        <nav className="container">
            <span className="title">React Clicky Game</span>
            <span className="message">{props.message}</span>
            <span className="score" id="currentScore">Your Score: {props.currentScore} | Top Score: {props.topScore}</span>
        </nav>
    );
}

export default Navbar;