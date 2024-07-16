import React from "react";
import "./../styles/Banner.scss";

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
        <div className="banner"> 
            <img className="banner-img" src={image} alt="banner" />
            <div className="dark-banner"></div>
            <span className="banner-text">{text}</span>
        </div>
    );
}

export default Banner;
