import React from "react";
import "./../styles/Banner.scss";

function Banner ({image, text}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="banner"></img>
            <div className="dark-banner"></div>
            <span className="banner-text">{text}</span>
        </div>
    );
}

export default Banner;