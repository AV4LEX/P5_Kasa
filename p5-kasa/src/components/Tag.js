import React from "react"; // Import React library
import "../styles/Tag.scss"; // Import SCSS file for Tag component styling

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
        <span className="tag">{name}</span> // Render a span element with the 'tag' class and display the name
    );
}

export default Tag; // Export the Tag component as the default export
