import React from "react";
import "./../styles/Footer.scss";
import logofooter from "../assets/images/logofooter.svg";

function Footer() {
    return (
        <footer>
            <div id="footer-container">
                <img src={logofooter} alt="Logo Footer" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;

