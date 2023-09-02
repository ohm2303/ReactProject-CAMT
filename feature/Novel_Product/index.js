import React from "react";
import Text from "../SubComponent/Text";
import styled from "styled-components";
import Heart from "../SubComponent/Heart";
//create novel product
function NovelProduct({ item, className }) {
  // require img
  // return novel
  // img
  // book name
  // name of author
  // category
  return (
    <div className={className}>
      <div className="Novel">
        <div className="Novel-img-container">
          <img className="Novel-img" src={item.file_pic} alt={item.name} />
        </div>
        <div className="Novel-text">
          <Text
            size={20}
            className="Novel-name"
            family={"Anuphan"}
            weight="600"
          >
            {item.name}
          </Text>
          <Text
            size={18}
            className="Novel-author"
            family={"Anuphan"}
            weight="600"
            color="#FFFFFF"
          >
            {item.author}
          </Text>
        </div>
        <div className="Novel-rating">
          <div className="rating">
            <Heart heartCount={3} />
            <div className="num-rating">{item.rating} Rating</div>
          </div>
          <div className="price">
            <Text size={15} family={"Anuphan"} weight="600" color="#666666">560 บาท</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

//export
export default styled(NovelProduct)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .Novel-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  .Novel-img {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 1rem;
  }
  .Novel {
    display: flex;
    width: 300px;
    border-radius: 8px;
    margin: 30px;
    flex-direction: column;
    background-color: #6AA4B0;

  }
  .Novel:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }
  
  .Novel:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  
  .Novel-text {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 5px;
  }
  .Novel-text p {
    margin: 0px;
  }

  .heart {
    margin: 0px 30px 5px 0px;
    display: grid;
    grid-template-columns: auto 1fr; /* แบ่งคอลัมน์เป็น 2 ส่วน โดยช่องแรกมีขนาดเพียงพอต่อข้อความ */
    align-items: center;
    color: red;
  }
  .heart-images {
    display: flex;
    align-items: center;
    gap: 5px; /* ระยะห่างระหว่างรูปภาพ */
  }
  .num-rating {
    color : #e1e7e0;
    font-family : Anuphan
  }
  .heart-images img {
    width: 20px;
    height: 20px;
  }
  .rating {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px 20px 10px 20px;
    
  }
  .Novel-rating{
    display: flex;
    flex-direction: row;
  }
  .price{
    background-color: #D9D9D9;
    border-radius: 15px;
    width: 80px;
    height: fit-content;
    text-align: center;
    margin-left: 60px;
  }
  .price p{
    margin: 10px 0px;
  }
  
`;
