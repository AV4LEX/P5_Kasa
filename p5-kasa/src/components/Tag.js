import React from "react";
import "../styles/Tag.scss";

function Tag({name}) {
    return(
        <span className="tag">{name}</span>
    );
}

export default Tag;