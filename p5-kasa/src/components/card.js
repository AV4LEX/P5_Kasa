import React from "react"; // Import the React library
import "./../styles/Card.scss"; // Import the SCSS file for styling

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
        <div className="card" id={id}> {/* Main container for the Card component */}
            <img className="card-img" src={image} alt="card" /> {/* Card image */}
            <div className="dark-card"></div> {/* Dark overlay on the card */}
            <span className="card-title">{title}</span> {/* Title displayed on the card */}
        </div>
    );
}

export default Card; // Export the Card component as the default export
