import React, { useState } from "react"; // Import the React library and useState hook
import "../styles/Collapse.scss"; // Import the SCSS file for styling
import Arrow from "../assets/images/arrow.svg"; // Import the arrow icon image

/**
 * Collapse component displays a collapsible section with a title and description.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {string} props.title - The title of the collapsible section
 * @param {string} props.description - The description content to be displayed
 * 
 * @returns {JSX.Element} The JSX code for the Collapse component
 */
function Collapse({ title, description }) {
  const [open, setOpen] = useState(false); // State to track if the collapse is open or closed

  /**
   * Function to toggle the collapse open or closed
   */
  const toggleCollapse = () => {
    setOpen(!open); // Toggle the value of 'open'
  };

  return (
    <div className={`collapse ${open ? "open" : ""}`}> {/* Main container for the Collapse component */}
      <div className="collapse-header" onClick={toggleCollapse}> {/* Header section with click event to toggle collapse */}
        <div className="collapse-title">{title}</div> {/* Title of the collapse section */}
        <span className={`collapse-arrow ${open ? "true" : ""}`}> {/* Arrow icon to indicate collapse state */}
          <img
            src={Arrow}
            alt="ouvrir l'onglet"
            className="collapse-arrow-img"
          />
        </span>
      </div>

      <div className="collapse-content" style={{ maxHeight: open ? "1000px" : "0" }}> {/* Content section with dynamic maxHeight based on 'open' state */}
        <div className="collapse-description">{description}</div> {/* Description content */}
      </div>
    </div>
  );
}

export default Collapse; // Export the Collapse component as the default export
