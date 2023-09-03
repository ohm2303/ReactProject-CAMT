import React, { useState } from "react";
import styled from "styled-components";
import photo1 from "../../pics/imgSlide/img1.png";
import photo2 from "../../pics/imgSlide/img2.jpeg";
import photo3 from "../../pics/imgSlide/img3.jpeg";

const ImageSlider = styled.div`
  width: 100%;
  max-width: 1200px;
  

  .mask {
    overflow: hidden;
    width: 100%;
    position: relative;
    margin-top:60px;
    margin-left:120px;
  }

  .overflow {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .slide {
    flex: 0 0 100%;
    background-size: cover;
    height: 300px; /* Set your desired height */
    
  }

  #controls {
    text-align: center;
    margin-top: 10px;
    margin-left:240px;
  }

  #controls label {
    display: inline-block;
    background: #ddd;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    cursor: pointer;
    
  }

  input.set {
    display: none;
  }

  input#slide1:checked ~ .mask .overflow {
    transform: translateX(0%);
  }

  input#slide2:checked ~ .mask .overflow {
    transform: translateX(-100%);
  }

  input#slide3:checked ~ .mask .overflow {
    transform: translateX(-200%);
  }

  input#slide4:checked ~ .mask .overflow {
    transform: translateX(-300%);
  }
`;

const PhotoSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [photo1, photo2, photo3];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <ImageSlider>
        <div className="mask">
          <div
            className="overflow"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="slide"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
        <div id="controls">
          {images.map((_, index) => (
            <label
              key={index}
              htmlFor={`slide${index + 1}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </ImageSlider>
    </>
  );
};


export default PhotoSlide;
