import React, { useState } from 'react';
import styled from 'styled-components';
import photo1 from "../../pics/imgSlide/banner_img1.jpeg";
import photo2 from "../../pics/imgSlide/banner_img2.jpeg";
import photo3 from "../../pics/imgSlide/banner_img3.jpeg";
import photo4 from "../../pics/imgSlide/banner_img4.jpeg";
import photo5 from "../../pics/imgSlide/banner_img5.jpeg";

// Styled component for the image slider
const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  .image-set {
    display: flex;
    overflow: hidden;
  }

  .slider-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }

  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .prev-button {
    left: 10px;
  }

  .next-button {
    right: 10px;
  }
`;

const PhotoSlide = ({ size }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [photo1, photo2, photo3, photo4, photo5];

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <ImageSlider>
      <button className="slider-button prev-button" onClick={prevSlide}>
        {'<'}
      </button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slider-image" />
      <button className="slider-button next-button" onClick={nextSlide}>
        {'>'}
      </button>
    </ImageSlider>
  );
};

export default PhotoSlide;
