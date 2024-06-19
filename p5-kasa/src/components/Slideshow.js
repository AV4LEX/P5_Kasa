import React, { useState } from "react";
import "../styles/Slideshow.scss";
import SlideArrow from "../assets/images/slide-arrow.svg";

function SlideShow({images}) {
    /*state hook*/
    let [displayImg, changeImg] = useState(0);
    let number_img = images.lenght;

    const PREVIEW_IMAGE = () => {
        if(displayImg === 0) {
            changeImg(number_img - 1);
        } else {
            changeImg(displayImg - 1);
        }
        return(changeImg);
    };

    const NEXT_IMAGE = () => {
        if(displayImg === 0) {
            changeImg(number_img + 1);
        } else {
            changeImg(displayImg + 1);
        }
        return(changeImg);
    };

    return(
        <div className="carrousel">
            {
                number_img > 1 && <img className="slide-arrow left-slide-arrow" src={SlideArrow} alt="contenu précédent" onClick={PREVIEW_IMAGE}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === displayImg ? 'slide-show-img on' : 'slide-show-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                number_img > 1 && <img className="slide-arrow right-slide-arrow" src={SlideArrow} alt="Contenu suivant" onClick={NEXT_IMAGE}/>
            }
        </div>
    );
}

export default SlideShow;