import React from "react";
import "../styles/Home.scss";
import Banner from "../components/banner"; // Import Banner component
import Homebanner from "../assets/images/homebanner.png"; // Import Homebanner image
import { NavLink } from "react-router-dom";
import Card from "../components/card"; // Import Card component
import LodgingList from "../assets/api/lodging.json";

/**
 * Component for the home page of the application.
 * Displays a banner and a list of lodgings with clickable cards.
 * 
 * @returns {JSX.Element} JSX code for the Home component
 */
function Home() {
    return (
        <div className="home">
            <Banner image={Homebanner} text="Chez vous, partout et ailleurs"/> {/* Display banner with Homebanner image and text */}
            <div className="lodging-list">
                {LodgingList.map((lodging) => (
                    <NavLink key={lodging.id} to={`/lodging/${lodging.id}`}>
                        <Card key={lodging.id} id={lodging.id} image={lodging.cover} title={lodging.title} /> {/* Display clickable Card component for each lodging */}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Home;
