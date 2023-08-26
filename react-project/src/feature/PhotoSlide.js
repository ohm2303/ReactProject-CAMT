import React, { useState } from 'react';
import './PhotoSlide.css'; // Make sure this path is correct based on your project structure

const PhotoSlide = ({ images,size }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
