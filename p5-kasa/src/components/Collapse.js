import React, { useState } from "react"; 
import "../styles/Collapse.scss"; 
import Arrow from "../assets/images/arrow.svg"; 

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
  const [open, setOpen] = useState(false); 


  const toggleCollapse = () => {
    setOpen(!open); 
  };

  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <div className="collapse-title">{title}</div>
        <span className={`collapse-arrow ${open ? "true" : ""}`}>
          <img
            src={Arrow}
            alt="ouvrir l'onglet"
            className="collapse-arrow-img"
          />
        </span>
      </div>

      <div className="collapse-content" style={{ maxHeight: open ? "1000px" : "0" }}>
        <div className="collapse-description">{description}</div>
      </div>
    </div>
  );
}

export default Collapse; 
