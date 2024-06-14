import React from "react";
import "./../styles/Card.scss";

function Card({id, image, title}) {
    return(
        <div className="card" id={id}>
            <img className="card-img" src={image} alt="card"></img>
            <div className="dark-card"></div>
            <span className="card-title">{title}</span>

        </div>
    );
}

export default Card;