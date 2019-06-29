import React from "react";
import styles from "./navbar.module.css"

function Navbar(props) {
    return (
        <nav className={styles.container}>
            <span className={styles.title}>Simpson's Memory Game</span>
            <span className={styles.message}>{props.message}</span>
            <div className={styles.score}>
                <span id={styles.currentScore}>Your Score: {props.score}</span>
                <span id={styles.topScore}>Top Score: {props.topScore}</span>
            </div>
        </nav>
    );
}

export default Navbar;