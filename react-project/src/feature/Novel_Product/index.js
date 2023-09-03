import React from 'react';
import styled from 'styled-components';

const NovelProduct = ({ className, item }) => {
  return (
    <div className={className}>
      <figure>
        <img src={item.file_pic} alt={item.name} />
        <figcaption>
          <div className="figcaption-content">
            <p>{item.name}</p>
            <p>{item.author}</p>
          </div>
          <div className="Novel-rating">
            <div className="rating-price">
              <div className="rating">
                <div className="num-rating">{item.rating} Rating</div>
              </div>
              <div className="price">
                <p>560 บาท</p>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default styled(NovelProduct)`
  @font-face {
    font-family: 'Anuphan';
    src: url('your-font-file.woff2') format('woff2'),
         url('your-font-file.woff') format('woff');
    font-weight: 300, 400, 500;
    font-display: swap;
  }

  figure {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 175px;
    min-width: 260px;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    cursor: pointer;
    
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      
      h3 {
        opacity: 0;
        transform: scale(0.7);
      }
      
      img {
        transform: scale(1.25);
      }
      
      figcaption {
        bottom: 0;
      }
    }
    
    h3 {
      position: absolute;
      top: 50px;
      left: 20px;
      margin: 0;
      padding: 0;
      color: white;
      font-size: 20px;
      font-weight: 100; 
      line-height: 1;
      opacity: 1;
      transform: scale(1);
      transition: 0.25s ease;
      z-index: 999;
      font-family: 'Anuphan', sans-serif; /* Use the custom font */
    }
    
    img {
      height: 100%;
      transition: 0.25s;
    }
    
    figcaption {
      position: absolute;
      bottom: -34%;
      left: 0;
      width: 100%;
      margin: 0;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.85);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      color: white;
      line-height: 1;
      display: flex;
      flex-direction: column;
      align-items: center; /* Center content vertically */
      justify-content: center; /* Center content horizontally */
      transition: 0.25s;
      font-family: 'Anuphan', sans-serif; /* Use the custom font */
      
      .figcaption-content {
        text-align: center;
      }
      
      p {
        font-size: 20px;
        line-height: 1.75;
        margin: 0px 0px 33px 0px;
        font-weight: 600;
        font-family: 'Anuphan', sans-serif; /* Use the custom font */
      }
      
     
      .Novel-rating {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        padding: 0 20px;
        color: white;
        font-family: 'Anuphan', sans-serif; /* Use the custom font */
        
        .rating-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 180px;
          font-family: 'Anuphan', sans-serif; /* Use the custom font */
        }
        
        .rating {
          .num-rating {
            font-family: 'Anuphan';
            color: white;
            font-family: 'Anuphan', sans-serif;
          }
        }
        
        .price {
          p {
            margin: 0px 0px 0px 10px;
            font-size: 15px;
            font-weight: 600;
            font-family: 'Anuphan', sans-serif; /* Use the custom font */
            
          }
        }
      }
    }
  }
`;