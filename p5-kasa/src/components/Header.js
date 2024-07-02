import React from "react"; // Import React Library
import "../styles/Header.scss"; // Import SCSS files
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom for the nav
import logoheader from "./../assets/images/logoheader.svg"; // Import logo image

/**
 * Header component represents the header section of the application.
 * It includes a logo and navigation links.
 * 
 * @returns {JSX.Element} The JSX code for the Header component
 */
function Header() {
    return (
        <header>
            <div id="header-container"> {/* Container for the header content */}
                <img className="header-img" src={logoheader} alt="Logo"/> {/* Logo image */}
                <nav className="header-nav"> {/* Navigation links */}
                    <NavLink to="/" end>Accueil</NavLink> {/* NavLink for the homepage */}
                    <NavLink to="/about">À propos</NavLink> {/* NavLink for the about page */}
                </nav>
            </div>
        </header>
    );
}

export default Header; // Export the Header component as the default export
