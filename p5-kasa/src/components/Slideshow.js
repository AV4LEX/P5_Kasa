import React, { useState } from "react"; // Import React and useState hook
import "../styles/Slideshow.scss"; // Import SCSS file for slideshow styling
import SlideArrow from "../assets/images/slide-arrow.svg"; // Import slide arrow icon image

/**
 * SlideShow component displays a slideshow of images with navigation arrows.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {string[]} props.images - Array of URLs for the slideshow images
 * 
 * @returns {JSX.Element} The JSX code for the SlideShow component
 */
function SlideShow({ images }) {
    const [displayImg, changeImg] = useState(0); // State to track the index of the currently displayed image
    const number_img = images.length; // Total number of images in the slideshow

    /**
     * Function to show the previous image in the slideshow
     */
    const PREVIEW_IMAGE = () => {
        if (displayImg === 0) {
            changeImg(number_img - 1); // Wrap around to the last image if at the first image
        } else {
            changeImg(displayImg - 1); // Move to the previous image
        }
    };

    /**
     * Function to show the next image in the slideshow
     */
    const NEXT_IMAGE = () => {
        if (displayImg === number_img - 1) {
            changeImg(0); // Wrap around to the first image if at the last image
        } else {
            changeImg(displayImg + 1); // Move to the next image
        }
    };

    return (
        <div className="slide-show">
            {number_img > 1 && (
                // Render left arrow button if there is more than one image
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
                // Render right arrow button if there is more than one image
                <button className="slide-arrow right-slide-arrow" onClick={NEXT_IMAGE}>
                    <img src={SlideArrow} alt="Next" />
                </button>
            )}
        </div>
    );
}

export default SlideShow; // Export the SlideShow component as the default export
