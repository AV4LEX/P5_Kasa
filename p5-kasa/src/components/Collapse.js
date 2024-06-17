import React, {useState} from "react";
import "../styles/Collapse.scss"
import Arrow from "../assets/images/arrow.svg"

function Collapse({title, description}) {
    //creat a state Hook
    const [open, setOpen] = useState(false);

    return(
        <div className="collapse" id={`collapse-${title}`}>
            <div className="collapse-header">
                <div className="collapse-title">{title}</div>
                <span className={`collapse-arrow ${open}`}>
                    <img src={Arrow} alt="ouvrir l'onglet" className="collapse-arrow-img"  onClick={() => setOpen(!open)}></img>
                </span>
            </div>

            {
                open && <div className="collapse-description">{description}</div>
            }

        </div>
    );
} 

export default Collapse;