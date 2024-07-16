import React from "react";
import "../styles/Header.scss"; 
import { NavLink } from "react-router-dom"; 
import logoheader from "./../assets/images/logoheader.svg"; 

/**
 * Header component represents the header section of the application.
 * It includes a logo and navigation links.
 * 
 * @returns {JSX.Element} The JSX code for the Header component
 */
function Header() {
    return (
        <header>
            <div id="header-container"> 
                <img className="header-img" src={logoheader} alt="Logo"/> 
                <nav className="header-nav"> 
                <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink> 
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>À propos</NavLink> 
                </nav>
            </div>
        </header>
    );
}

export default Header; 
