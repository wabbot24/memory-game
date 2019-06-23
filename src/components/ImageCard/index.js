import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card" onClick={props.checkScore}>
      <div className="img-container" onClick={props.shuffleImages}>
        <img id={props.id} alt={props.name} src={props.image} />
      </div>

     
    </div>
  );
}

export default ImageCard;
