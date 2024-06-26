import React, { useState } from "react";
import "../styles/Slideshow.scss";
import SlideArrow from "../assets/images/slide-arrow.svg";

function SlideShow({ images }) {
    let [displayImg, changeImg] = useState(0);
    let number_img = images.length;

    const PREVIEW_IMAGE = () => {
        if (displayImg === 0) {
            changeImg(number_img - 1);
        } else {
            changeImg(displayImg - 1);
        }
    };

    const NEXT_IMAGE = () => {
        if (displayImg === number_img - 1) {
            changeImg(0);
        } else {
            changeImg(displayImg + 1);
        }
    };

    return (
        <div className="slide-show">
            {number_img > 1 && (
                <button className="slide-arrow left-slide-arrow" onClick={PREVIEW_IMAGE}>
                    <img src={SlideArrow} alt="Previous" />
                </button>
            )}
            {images.map((image, index) => (
                <img
                    key={index}
                    className={index === displayImg ? 'slide-show-img on' : 'slide-show-img'}
                    src={image}
                    alt="Housing"
                />
            ))}
            {number_img > 1 && (
                <button className="slide-arrow right-slide-arrow" onClick={NEXT_IMAGE}>
                    <img src={SlideArrow} alt="Next" />
                </button>
            )}
        </div>
    );
}

export default SlideShow;
