import React from "react";
import "../styles/Home.scss";
import Banner from "../components/banner";
import Homebanner from "../assets/images/homebanner.png";
import { NavLink } from "react-router-dom";
import Card from "../components/card";
import LodgingList from "../assets/api/lodging.json";

function Home() {
    return (
        <div className="home">
            <Banner image={Homebanner} text="Chez vous, partout et ailleurs"/>
            <div className="lodging-list">
                {LodgingList.map((lodging) => (
                    <NavLink key={lodging.id} to={`/lodging/${lodging.id}`}>
                        <Card key={lodging.id} id={lodging.id} image={lodging.cover} title={lodging.title} />
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Home;
