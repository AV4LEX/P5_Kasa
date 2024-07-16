import React from "react"; 
import "./../styles/Card.scss"; 

/**
 * Card component displays an image with a title overlay.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {string} props.id - The unique identifier for the card
 * @param {string} props.image - The source URL of the card image
 * @param {string} props.title - The title to be displayed on the card
 * 
 * @returns {JSX.Element} The JSX code for the Card component
 */
function Card({ id, image, title }) {
    return (
        <div className="card" id={id}> 
            <img className="card-img" src={image} alt="card" /> 
            <div className="dark-card"></div> 
            <span className="card-title">{title}</span> 
        </div>
    );
}

export default Card; 
