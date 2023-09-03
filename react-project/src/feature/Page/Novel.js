import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//Component
import Text from "../SubComponent/Text";
import Button from "../SubComponent/Button";
import ButtonIcon from "../SubComponent/ButtonIcon";
import Heart from "../SubComponent/Heart";
import Report from "../Component/Report";
import Promotion from "../Component/Promotion";
import Input from "../SubComponent/Input";
import Nav from "../Component/Navbar";
import axios from 'axios';

//Hook
import useFetch from "../Hook/useFetch";

//Button Icon
import basketDefault from "../../pics/Icon/basket-default.png";
import basketHovered from "../../pics/Icon/basket-hovered.png";
import heartDefault from "../../pics/Icon/heartDefault.png";
import heartHovered from "../../pics/Icon/red-heart.png";
import saveDefault from "../../pics/Icon/saveDefault.png";
import saveHovered from "../../pics/Icon/saveHovered.png";
import shareDefault from "../../pics/Icon/shareDefault.png";
import shareHovered from "../../pics/Icon/shareHovered.png";
import likeDefault from "../../pics/Icon/likeDefault.png";
import likeHovered from "../../pics/Icon/likeHovered.png";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReview } from "../../store/reviewSlice";
import { userContext } from "../../App";

const NovelPage = ({ className, idNovel, handlePrefixChange }) => {
  const [loading,setLoading]=useState(true)
  const {dataCon,setDataCon}=useContext(userContext)

  //redux
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.review.review);

  // pull id from novel
  const { id } = useParams();

  //post
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  //Api
  const Api_Novel = `/novels/${id}`;
  const { data } = useFetch(Api_Novel);

  //post

  const reviewSubmit = () => {
    console.log(inputReview)
    const heart = clickedHearts.length
    console.log(heart)
    console.log(dataCon.id)
    console.log(heart)
    const postDataToServerView = async () => {
      try {
        const url = `/reviews/${dataCon.id}/${id}`;
        const dataToSan = {
          details:inputReview,
          num_like:heart
        };
        const response = await axios.post(url, dataToSan);

        console.log("คำขอ POST สำเร็จ:", response.data);
        alert(`review success`)
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการส่งคำขอ POST ข้อมูลธนาคาร:", error);
        alert(`error`)
      }
    };

    // เรียกใช้งานฟังก์ชันสำหรับการส่งคำขอ POST ข้อมูลธนาคาร
    postDataToServerView();
  }
  //Report
  const [isReportOpen, setIsReportOpen] = useState(false);
  const handleReportButtonClick = () => {
    setIsReportOpen(!isReportOpen);
  };

  // HeartClick
  const [clickedHearts, setClickedHearts] = useState([]);
  const handleHeartClick = (heartIndex) => {
    if (clickedHearts.includes(heartIndex)) {
      setClickedHearts(clickedHearts.filter((index) => index !== heartIndex));
    } else {
      setClickedHearts([...clickedHearts, heartIndex]);
    }
  };

  //InputReview
  const [inputReview, setInputReview] = useState("");
  const handleInputChange = (event) => {
    setInputReview(event.target.value);
  };

  //Photo
  const heartDefault1 = require("../../pics/Icon/heart-white.png");
  const heartHovered1 = require("../../pics/Icon/red-heart.png");
  const photoNovel = require("../../pics/Noval/นางมาร.jpeg");
  const editIcon = require("../../pics/Icon/edit.png");
  const user = require("../../pics/Icon/circle-user.png");


  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  //post api
  const onClick = () => {
    const url = `/baskets/{${id}/${getCookie("id")}}`;
    axios.post(url)
      .then(response => {
        console.log(response.data);
        alert(`basket success`)
      })
      .catch(error => {
        console.error('Error:', error);
        alert(`error`)
      });
  };
  const basketSubmit = () => {
    const postDataToServerOrder = async () => {
      try {
        const url = `/orders/basket/${dataCon.id}/${id}`;
        const response = await axios.post(url);

        console.log("คำขอ POST สำเร็จ:", response.data);
        alert("review create")
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการส่งคำขอ POST ข้อมูลธนาคาร:", error);
        alert("คุณลูกค้าได้เพิ่มไปในตระกล้าแล้ว")
      }
    };

    // เรียกใช้งานฟังก์ชันสำหรับการส่งคำขอ POST ข้อมูลธนาคาร
    postDataToServerOrder();
  }

  useEffect(()=> {
    fetch((`${process.env.REACT_APP_API_PREME}/api/user/Review/${id}`),{    
      method:"GET",                                     
  })
  .then(response => response.json())
  .then(data=>{ 
  dispatch(setReview(data))
  setLoading(false)
  console.log("review")
  console.log( )
  })
},[loading])

  return (
    <div className={className}>
      <div className="total-content">
        <div className="detail-novel">
          <div className="name">
            <Text size={35} family={"Anuphan"} weight="500">
              {data.name}
            </Text>
          </div>

          <div className="content">
            <div className="photo-novel">
              <img src={data.file_pic} alt=" " />
              <Promotion
                discountPercentage={data.promotion}
                fullPrice={data.price}
              />
            </div>

            <div className="detail-left-box">
              <div className="detail-book">
                <Text size={15} family={"Anuphan"} weight="600">
                  <ul>
                    <li>โดย </li>
                    <li>หมวดหมู่ </li>
                    <li>ราคา </li>
                  </ul>
                </Text>
                <Text size={15} family={"Anuphan"} weight="500">
                  <ul>
                    <li>{data.author}</li>
                    <li>{data.category}</li>
                    <li>{data.price} บาท </li>
                  </ul>
                </Text>
              </div>
              <div className="total-button">
                <Button value="ทดลองอ่าน" className="button-buy" />
                <Button
                  value={`ซื้อ ${data.coverPrice} บาท`}
                  className="button-buy"
                />
              </div>

              <div className="rating">
                <Heart heartCount={4.96} />
                <div className="num-rating">{data.rating} Rating</div>
              </div>

              <div className="button-icon">
                <ButtonIcon
                onClick={basketSubmit}
                  defaultImg={basketDefault}
                  hoveredImg={basketHovered}
                  text={"ตระกร้า"}
                  className="icon-button"
                />
                <ButtonIcon
                  defaultImg={saveDefault}
                  hoveredImg={saveHovered}
                  text={"บันทึก"}
                  className="icon-button"
                />
                <div className="report">
                  <button onClick={handleReportButtonClick}>
                    <img src={editIcon} />
                  </button>
                  <p>แจ้งปัญหา</p>
                </div>

                {isReportOpen && <Report isOpen={true} />}
              </div>
              <div className="detail-file">
                <Text size={15} family={"Anuphan"} weight="600">
                  <ul>
                    <li>ประเภท</li>
                    <li>วันที่วางขาย</li>
                    <li>ความยาว</li>
                    <li>ราคาปก</li>
                  </ul>
                </Text>
                <Text size={15} family={"Anuphan"} weight="500">
                  <ul>
                    <li>pdf, epub(สารบัญ) </li>
                    <li>{data.release_date}</li>
                    <li>{data.numpage}</li>
                    <li>${data.price} บาท</li>
                  </ul>
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="synopsis">
          <Text size={16} family={"Anuphan"} weight="500">
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; ถึงเวลาสิ้นสุดทางเปย์ (เรื่องนี้)
            เรียบร้อยแล้ว ใครกำลังรอบทสรุปการเงิน ความรักแสนน่ารักนี้
            ตอนนี้เดินทางมาถึงเรียบร้อยแล้วค่ะ ถ้าเป็นเมื่อก่อน
            เธอไม่มีทางยอมรับคำขอโทษนี้หรอก
            ทว่าตอนนี้เธอรู้ว่าเธอไม่ได้เป็นเพียงสวี่รุ่ย
            แต่เธอยังเป็นจู้จื่อรุ่ยด้วย จู้ไม่ใช่แค่นามสกุล
            มันมีความหมายมากกว่านั้น มีทั้งอำนาจและความรับผิดชอบ
            สิ่งนี้ทำให้เธอเติบโตขึ้นอย่างรวดเร็ว เหมือนกับประโยคที่ว่า
            เป็นเด็กไม่มีเรื่องให้ต้องคิดมาก
            แต่ผู้ใหญ่กลับมีเรื่องให้ต้องรับผิดชอบเต็มไปหมด
            มาถึงบทสรุปและภารกิจยากระดับสูงสุดภารกิจสุดท้ายของสวี่รุ่ย
            ที่ต้องใช้เงินหนึ่งหมื่นล้านให้หมดโดยไม่เหลือทรัพย์สินใดๆ ไว้
            ภารกิจนี้จะผ่านไปได้ด้วยดีไหม ลั่วหานจะอยู่เคียงข้างให้กำลังใจยังไง
            และสุดท้ายเจ้าระบบที่อยู่ด้วยกันมาตลอดจะอยู่หรือไป มาลุ้นกัน
          </Text>
        </div>

        <div className="review">
          <Text size={30} family={"Anuphan"} weight="600">
            เขียนรีวิวและให้เรตติ้ง
          </Text>
          
          <div className="user">
            <img src={user}></img>
            <Text size={18} family={"Anuphan"} weight="500">
            {dataCon.displayname}
            </Text>
          </div>

          <div className="writing-review">
            <div className="give-heart">
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  src={
                    clickedHearts.includes(index + 1)
                      ? heartHovered1
                      : heartDefault1
                  }
                  alt={`Heart ${index + 1}`}
                  className="heart-icon"
                  onClick={() => handleHeartClick(index + 1)}
                />
              ))}
              <p>จำนวนหัวใจที่คลิก: {clickedHearts.length}</p>
            </div>
            <div className="writing">
              <Input
                type="text"
                placeholder="เริ่มการรีวิวได้เลยจ้า"
                value={inputReview}
                onChange={handleInputChange}
                width="703px"
              />
              <div className="button-review">
                <Button value="ส่งรีวิว" onClick={reviewSubmit}/>
              </div>
            </div>
          </div>
        </div>

        <div className="total-review">
          <Text size={30} family={"Anuphan"} weight="600">
            รีวิวทั้งหมด
          </Text>
          {reviews.map((e)=>
          <div className="box-reviews">
            <div className="user-review">
              <img src={user}></img>
              <div className="heart-user-review">
                <Text size={15} family={"Anuphan"} weight="500">
                  
                </Text>
                <Heart heartCount={e.num_like} />
              </div>
            </div>
            
            <>
            <div className="details-review">
              <Text size={15} family={"Anuphan"} weight="500">
                { e.details}
              </Text>
            </div>
            </>
          
            <div className="like">
              <ButtonIcon
                defaultImg={likeDefault}
                hoveredImg={likeHovered}
                className="icon-button"
              />
              <Text size={12} family={"Anuphan"} weight="500">
                {e.display_name}
              </Text>
            </div>
          </div>
            )}
        </div>
      </div>
    </div>
  );
};

NovelPage.propTypes = {
  idNovel: PropTypes.number.isRequired,
};

/*kanokwan Mahakham */
export default styled(NovelPage)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .total-content {
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
    flex-direction: column;
  }

  /*detail-novel*/
  .detail-novel {
    display: flex;
    background-color: #f1f1f1;
    width: 50%;
    height: fit-content;
    border-radius: 10px;
    justify-content: center; /* จัดกลางแนวนอน */
    flex-direction: column;
    align-items: center;
    margin-top:80px;
  }

  .name p {
    margin-top: 40px;
    margin-bottom: 0px;
  }
  .content {
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    width: 85%;
    display: flex;
  }

  .photo-novel {
    width: 45%; /* ความกว้างของพื้นที่ภาพ */
    padding-right: 20px; /* ระยะห่างจากเนื้อหาด้านบน */
    align-items: center;
  }

  .photo-novel img {
    width: 200px;
    height: 230px;
    object-fit: cover;
    margin-left: 20%;
  }
  .promotion {
    width: 200px;
    height: 130px;
    margin-left: 20%;
    background-color: white;
  }
  .percent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .percent img {
    width: 38px;
    height: 40px;
    margin: 0px 20px 3px 0px;
  }
  .percent p {
    margin-bottom: 5px;
    margin-top: 4px;
  }
  .promotion-text {
    display: flex;
    width: 100%;
    height: 40px;
    background-color: red;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .promotion-text p {
    margin: 0;
  }
  .price {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .price li {
    list-style-type: none;
  }
  .price p {
    margin: 0;
    padding: 0;
  }
  .price ul {
    margin-top: 0;
  }
  .detail-left-box {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
  .detail-book {
    display: flex;
    width: 100%;
  }
  .detail-book ul {
    list-style-type: none; /* เอาจุดออก */
  }
  .detail-book li {
    margin: 10px 0px;
  }
  .total-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 15px;
  }

  .total-button .ButtonNormal {
    appearance: none;
    background-color: #e1e7e0; /* Change background color */
    border-radius: 30px;
    box-sizing: border-box;
    color: black; /* Change text color to black */
    cursor: pointer;
    display: flex;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 17px;
    font-family: "Anuphan";
    font-weight: 600;
    line-height: normal;
    margin: 0;
    margin-bottom: 10px;
    margin-right: 16px;
    min-height: 40px;
    min-width: 140px;
    outline: none;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
    align-items: center;
    justify-content: center;
  }

  .total-button .ButtonNormal:disabled {
    pointer-events: none;
  }

  .total-button .ButtonNormal:hover {
    color: white; /* Change text color to white */
    background-color: black; /* Change background color to black */
    border-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .total-button .ButtonNormal:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .ButtonNormal {
    width: 120px;
    height: 45px;
    background-color: white;
    border-radius: 30px;
    border: none;
    padding: 1.3%;
    margin: 20px;
    text-align: center;
    font-family: "Anuphan";
    font-size: 15px;
    font-weight: 600;
  }

  .rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .heart {
    margin: 0px 30px 30px 0px;
    display: grid;
    grid-template-columns: auto 1fr; /* แบ่งคอลัมน์เป็น 2 ส่วน โดยช่องแรกมีขนาดเพียงพอต่อข้อความ */
    align-items: center;
    color: red;
  }
  .rating img {
    width: 15px;
  }

  .heart-images {
    display: flex;
    align-items: center;
    gap: 5px; /* ระยะห่างระหว่างรูปภาพ */
  }
  .heart-rating {
    font-size: 12px;
    margin-right: 10px;
  }
  .num-rating {
    font-size: 12px;
    margin: 0px 30px 30px 0px;
  }
  .button-icon {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
  .icon-button {
    font-family: "Anuphan";
    font-size: 13px;
    font-weight: 500;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: grid;
    place-items: center; /* จัดตรงกลางทั้งแนวดิ่งและแนวนอน */
  }
  .icon-button img {
    width: 25px;
    height: 25px;
    display: block;
    margin-bottom: 5px;
  }
  .report {
    font-family: "Anuphan";
    font-size: 13px;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    display: grid;
    place-items: center;
  }
  .report img {
    width: 25px;
    height: 25px;
    display: block;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  .report p {
    margin-bottom: 5px;
    margin-top: 8px;
  }
  .detail-file li {
    margin: 15px 0px;
  }
  .detail-file ul {
    list-style-type: none;
  }
  .detail-file {
    display: flex;
    margin-bottom: 40px;
  }

  /*synopsis*/
  .synopsis {
    width: 50%;
    height: fit-content;
  }
  .synopsis p {
    line-height: 3;
    margin: 50px;
  }
  .give-heart {
    display: flex;
    align-items: center;
  }

  /*review*/
  .review {
    width: 50%;
    margin-bottom: 30px;
  }
  .give-heart {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2b4560;
  }
  .heart-icon {
    width: 30px;
    height: 30px;
    padding-right: 5px;
    cursor: pointer;
    transition: transform 0.2s, filter 0.2s;
  }

  .heart-icon:hover {
    transform: scale(1.2);
    filter: brightness(1.2);
  }

  .writing-review p {
    margin: 10px 0;
  }
  .writing {
    width: 100%;
    height: fit-content;
    background-color: #e1e7e0;
  }

  .writing .input-component {
    height: 50%;
    background-color: #e1e7e0;
  }
  .button-review {
    display: flex;
    justify-content: flex-end;
  }

  .button-review .ButtonNormal {
    appearance: none;
    background-color: black; /* Change background color to black */
    border-radius: 30px;
    box-sizing: border-box;
    color: white; /* Change text color to white */
    cursor: pointer;
    display: flex;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 17px;
    font-family: "Anuphan";
    font-weight: 600;
    line-height: normal;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 16px;
    min-height: 40px;
    min-width: 140px;
    outline: none;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
    align-items: center;
    justify-content: center;
  }

  .button-review .ButtonNormal:disabled {
    pointer-events: none;
  }

  .button-review .ButtonNormal:hover {
    color: white; /* Change text color to white */
    background-color: gray; /* Change background color to gray */
    border-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .button-review .ButtonNormal:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .user img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  /*total-review*/
  .total-review {
    width: 50%;
    margin-bottom: 30px;
  }
  .box-reviews {
    width: 100%;
    height: fit-content;
    background-color: #e1e7e0;
  }
  .user-review {
    display: flex;
    align-items: center;
  }
  .user-review img {
    width: 30px;
    height: 30px;
    margin: 10px;
    margin-top: 0px;
  }
  .heart-user-review img {
    width: 15px;
    height: 15px;
    margin: 0px;
  }
  .heart-user-review .heart-images {
    display: flex;
    align-items: center;
    gap: 2;
  }
  .heart-user-review p {
    margin-bottom: 2px;
    margin-top: 20px;
  }
  .details-review {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: flex-start;
    margin-left: 50px;
    margin-bottom: 10px;
  }
  .details-review p {
    margin-top: 0px;
  }
  .like {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 10px 20px;
  }
`;