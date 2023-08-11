import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PhotoSlide.css'; // Make sure this path is correct based on your project structure

const PhotoSlide = ({ images }) => {
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

PhotoSlide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PhotoSlide;
