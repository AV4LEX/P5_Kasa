import React from "react"; // Import the React library
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import "./../styles/Footer.scss"; // Import the SCSS file for styling
import logofooter from "../assets/images/logofooter.svg"; // Import the logo image for the footer

/**
 * Footer component represents the footer section of the application.
 * 
 * @returns {JSX.Element} The JSX code for the Footer component
 */
function Footer() {
    return (
        <footer>
            <div id="footer-container"> {/* Container for the footer content */}
                <Link to="/" className="footer-logo-link"> {/* Link to homepage with logo */}
                    <img src={logofooter} alt="Logo Footer" /> {/* Footer logo */}
                </Link>
                <p>&copy; 2022 Kasa. Tous droits réservés</p> {/* Copyright statement */}
            </div>
        </footer>
    );
}

export default Footer; // Export the Footer component as the default export
