import React, { useState } from "react"; 
import "../styles/Slideshow.scss"; 
import SlideArrow from "../assets/images/slide-arrow.svg"; 

/**
 * SlideShow component displays a slideshow of images with navigation arrows.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {string[]} props.images - Array of URLs for the slideshow images
 * 
 * @returns {JSX.Element} The JSX code for the SlideShow component
 */
function SlideShow({ images }) {
    const [displayImg, changeImg] = useState(0); 
    const number_img = images.length; 


    const PREVIOUS_IMAGE = () => {
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
                <button className="slide-arrow left-slide-arrow" onClick={PREVIOUS_IMAGE}>
                    <img src={SlideArrow} alt="Previous" />
                </button>
            )}
            {number_img > 1 && (
            <div className="slide-show-counter">
                {displayImg + 1} / {number_img}
            </div>
            )}
            {images.map((image, index) => (
                <img
                    key={index}
                    className={index === displayImg ? 'slide-show-img on' : 'slide-show-img'}
                    src={image}
                    alt="logement"
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
