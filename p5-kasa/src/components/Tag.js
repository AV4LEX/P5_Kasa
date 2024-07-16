import React from "react";
import "../styles/Tag.scss";

/**
 * Tag component displays a tag with a specified name.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {string} props.name - The name to display inside the tag
 * 
 * @returns {JSX.Element} The JSX code for the Tag component
 */
function Tag({ name }) {
    return (
        <span className="tag">{name}</span>
    );
}

export default Tag; 
