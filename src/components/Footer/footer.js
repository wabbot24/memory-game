import React from "react";
import "./footer.css"

function Footer (props) {
    return (
        <span className="messageOverflow">{props.message}</span>
    )
}

export default Footer;

