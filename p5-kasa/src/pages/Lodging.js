import React from "react"; // Import React library
import "../styles/Lodging.scss"; // Import SCSS file for Lodging component styling
import { useParams, Navigate } from 'react-router-dom'; // Import useParams and Navigate from react-router-dom
import LodgingList from "../assets/api/lodging.json"; // Import JSON file containing lodging data
import SlideShow from "../components/Slideshow.js"; // Import SlideShow component
import Tag from "../components/Tag"; // Import Tag component
import Star from "../assets/images/star.svg"; // Import full star image
import EmptyStar from "../assets/images/emptystar.svg"; // Import empty star image
import Collapse from "../components/Collapse"; // Import Collapse component

/**
 * Component representing a lodging details page.
 * Displays information about a specific lodging including slideshow, tags, rating, description, and equipment.
 * Redirects to 404 page if lodging ID is not found.
 * 
 * @returns {JSX.Element} JSX code for the Lodging component
 */
function Lodging() {
    const { id } = useParams(); // Retrieve lodging ID from URL parameters
    const LODGING_SHEET = LodgingList.find(lodging => lodging.id === id); // Find lodging details based on ID from JSON data

    // Redirect to 404 page if lodging details are not found
    if (!LODGING_SHEET) {
        return <Navigate to="/404" replace />;
    }

    /* Tags */
    const LODGING_TAGS = LODGING_SHEET.tags && LODGING_SHEET.tags.map((tag, index) => (
        <Tag key={index} name={tag} /> // Generate tags based on lodging data
    ));

    /* Rating */
    let lodging_rating = [];
    for (let index = 0; index < 5; index++) {
        if (index < parseInt(LODGING_SHEET.rating, 10)) {
            lodging_rating.push(<img key={index} className="star" src={Star} alt={`${LODGING_SHEET.rating}/5`} />);
        } else {
            lodging_rating.push(<img key={index} className="star" src={EmptyStar} alt={`${LODGING_SHEET.rating}/5`} />);
        }
    }

    /* Equipments */
    const LODGING_EQUIPMENTS = LODGING_SHEET.equipments && LODGING_SHEET.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li> // Generate equipment list based on lodging data
    ));

    // Render lodging details including slideshow, tags, rating, description, and equipment
    return (
        <div className="sheet">
            <SlideShow images={LODGING_SHEET.pictures} /> {/* Render SlideShow component with lodging pictures */}
            <div className="land-lord">
                <div className="info">
                    <span className="lodging-title">{LODGING_SHEET.title}</span> {/* Display lodging title */}
                    <span className="location">{LODGING_SHEET.location}</span> {/* Display lodging location */}
                    <div className="tags">{LODGING_TAGS}</div> {/* Display lodging tags */}
                </div>
                <div className="description">
                    <div className="land-lord-info">
                        <span className="land-lord-name">{LODGING_SHEET.host.name}</span> {/* Display host name */}
                        <img className="land-lord-img" src={LODGING_SHEET.host.picture} alt="Owner" /> {/* Display host picture */}
                    </div>
                    <div className="rating">{lodging_rating}</div> {/* Display lodging rating */}
                </div>
            </div>
            <div className="equipment-description">
                <Collapse title="Description" description={LODGING_SHEET.description} /> {/* Render Collapse component with lodging description */}
                {LODGING_EQUIPMENTS && (
                    <Collapse title="Equipments" description={<ul>{LODGING_EQUIPMENTS}</ul>} />
                )}
            </div>
        </div>
    );
}

export default Lodging; // Export the Lodging component as the default export
