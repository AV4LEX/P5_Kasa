import React from "react"; // Import the React library
import "./../styles/Banner.scss"; // Import the SCSS file for styling

/**
 * Banner component displays an image with a text overlay.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {string} props.image - The source URL of the banner image
 * @param {string} props.text - The text to be displayed on the banner
 * 
 * @returns {JSX.Element} The JSX code for the Banner component
 */
function Banner({ image, text }) {
    return (
        <div className="banner"> {/* Main container for the Banner component */}
            <img className="banner-img" src={image} alt="banner" /> {/* Banner image */}
            <div className="dark-banner"></div> {/* Dark overlay on the banner */}
            <span className="banner-text">{text}</span> {/* Text displayed on the banner */}
        </div>
    );
}

export default Banner; // Export the Banner component as the default export
