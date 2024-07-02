import React from "react";
import "../styles/Layout.scss";
import NotFoundImage from "../assets/images/404.png";
import "../styles/NotFound.scss";

/**
 * Component for displaying a 404 Not Found error page.
 * 
 * @returns {JSX.Element} JSX for the NotFound component
 */
function NotFound() {
    return (
        <div className="not-found">
            <img src={NotFoundImage} alt="404 Not Found" className="404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/" className="home-link">Retourner à la page d'accueil</a>
        </div>
    );
}

export default NotFound;
