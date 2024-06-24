import React from "react";
import "../styles/Lodging.scss";
import { useParams, Navigate } from 'react-router-dom';
import LodgingList from "../assets/api/lodging.json";
import SlideShow from "../components/Slideshow.js";
import Tag from "../components/Tag.js";
import Star from "../assets/images/star.svg";
import EmptyStar from "../assets/images/emptystar.svg";
import Collapse from "../components/Collapse";

function Lodging() {
    const { id } = useParams();
    const LODGING_SHEET = LodgingList.find(lodging => lodging.id === id);

    if (!LODGING_SHEET) {
        return <Navigate replace to="/404" />;
    }

    /* Tags */
    const LODGING_TAGS = LODGING_SHEET.tags && LODGING_SHEET.tags.map((tag, index) => (
        <Tag key={index} name={tag} />
    ));

    /* Rating */
    let lodging_rating = [];
    for (let index = 0; index < 5; index++) {
        if (index < parseInt(LODGING_SHEET.rating, 10)) {
            lodging_rating.push(<img key={index} className="star" src={Star} alt={`${LODGING_SHEET.rating}/5`} />);
        } else {
            lodging_rating.push(<img key={index} className="star" src={EmptyStar} alt={`${LODGING_SHEET.rating}/5`} />);
        }
    }

    /* Equipments */
    const LODGING_EQUIPMENTS = LODGING_SHEET.equipments && LODGING_SHEET.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
    ));

    return (
        <div className="sheet">
            <SlideShow images={LODGING_SHEET.pictures} />
            <div className="land-lord">
                <div className="info">
                    <span className="lodging-title">{LODGING_SHEET.title}</span>
                    <span className="location">{LODGING_SHEET.location}</span>
                    <div className="tags">{LODGING_TAGS}</div>
                </div>
                <div className="description">
                    <div className="land-lord-info">
                        <span className="land-lord-name">{LODGING_SHEET.host.name}</span>
                        <img className="land-lord-img" src={LODGING_SHEET.host.picture} alt="Propriétaire" />
                    </div>
                    <div className="rating">{lodging_rating}</div>
                </div>
            </div>
            <div className="equipment-description">
                <Collapse title="Description" description={LODGING_SHEET.description} />
                {LODGING_EQUIPMENTS && (
                    <Collapse title="Équipements" description={<ul>{LODGING_EQUIPMENTS}</ul>} />
                )}
            </div>
        </div>
    );
}

export default Lodging;
