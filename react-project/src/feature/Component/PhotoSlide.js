import React, { useState } from 'react';
import '../style/PhotoSlide.css'; // Make sure this path is correct based on your project structure
import photo1 from "../../pics/imgSlide/banner_img1.jpeg"; // Import the first image
import photo2 from "../../pics/imgSlide/banner_img2.jpeg";
import photo3 from "../../pics/imgSlide/banner_img3.jpeg";
import photo4 from "../../pics/imgSlide/banner_img4.jpeg";
import photo5 from "../../pics/imgSlide/banner_img5.jpeg";
const PhotoSlide = ({ size }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [photo1, photo2, photo3, photo4, photo5]; // Add all the imported images to the array

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <button className="slider-button prev-button" onClick={prevSlide}>
        {'<'}
      </button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slider-image" />
      <button className="slider-button next-button" onClick={nextSlide}>
        {'>'}
      </button>
    </div>
  );
};

export default PhotoSlide;
