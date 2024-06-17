import React from "react";
import "./../styles/Header.scss";
import { NavLink } from "react-router-dom";
import logoheader from "./../assets/images/logoheader.svg";


function Header() {
    return (
        <header>
            <div id="header-container">
                <img className="header-img" src={logoheader} alt="Logo"/>
                <nav className="header-nav">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about" activeClassName="active">À propos</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
