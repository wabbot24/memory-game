import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.shuffle}>
        <img id={props.id} alt={props.name} src={props.image} />
      </div>

     
    </div>
  );
}

export default ImageCard;
