import React from "react"
import "../styles/Header.css"
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <nav>
                <NavLink to={Home}>Accueil</NavLink>
                <NavLink to={about}>À propos</NavLink>
            </nav>
        </header>
    )
  }
  
  export default Header;