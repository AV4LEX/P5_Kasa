import React from "react";
import "./../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/components/Home">Accueil</NavLink>
                <NavLink to="/pages/About">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;
