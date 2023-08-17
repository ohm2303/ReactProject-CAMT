import React, { useState } from "react";
import Text from "../SubComponent/Text";
import Button from "../SubComponent/Button";
import ButtonIcon from "../SubComponent/ButtonIcon";
import Heart from "../SubComponent/Heart";
import Report from "../Report";
import Promotion from "../Promotion";
import Input from "../SubComponent/Input";
import "./Novel.css";
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

const NovelPage = () => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const handleReportButtonClick = () => {
    setIsReportOpen(!isReportOpen);
  };

  const [clickedHearts, setClickedHearts] = useState(0);
  const [hoveredHearts, setHoveredHearts] = useState(0);

  const handleHeartClick = (count) => {
    setClickedHearts(count);
  };

  const handleHeartHover = (count) => {
    setHoveredHearts(count);
  };

  const [inputReview, setInputReview] = useState("");
  const handleInputChange = (event) => {
    setInputReview(event.target.value);
  };

  //photo
  const heartDefault1 = require("../../pics/Icon/heart-white.png");
  const heartHovered1 = require("../../pics/Icon/red-heart.png");
  const photoNovel = require("../../pics/Noval/นางมาร.jpeg");
  const editIcon = require("../../pics/Icon/edit.png");
  const user = require("../../pics/Icon/circle-user.png");

  return (
    <>
      <div className="total-content">
        <div className="detail-novel">
          <div className="name">
            <Text size={35} family={"Anuphan"} weight="500">
              นางมาร
            </Text>
          </div>

          <div className="content">
            <div className="photo-novel">
              <img src={photoNovel} alt=" " />
              <Promotion discountPercentage={38} fullPrice={300} />
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
                    <li>ชลาลัย </li>
                    <li>นิยายรัก </li>
                    <li>300 บาท </li>
                  </ul>
                </Text>
              </div>
              <div className="total-button">
                <Button value="ทดลองอ่าน"  className="button-buy"/>
                <Button value="ซื้อ 300 บาท" className="button-buy"/>
              </div>

              <div className="rating">
                <Heart heartCount={4.96} />
                <div className="num-rating">560 Rating</div>
              </div>

              <div className="button-icon">
                <ButtonIcon
                  defaultImg={basketDefault}
                  hoveredImg={basketHovered}
                  text={"ตระกร้า"}
                  className="icon-button"
                />
                <ButtonIcon
                  defaultImg={heartDefault}
                  hoveredImg={heartHovered}
                  text={"ติดตาม"}
                  className="icon-button"
                />
                <ButtonIcon
                  defaultImg={saveDefault}
                  hoveredImg={saveHovered}
                  text={"บันทึก"}
                  className="icon-button"
                />
                <ButtonIcon
                  defaultImg={shareDefault}
                  hoveredImg={shareHovered}
                  text={"แชร์"}
                  className="icon-button"
                />
                <div className="report">
                  <button onClick={handleReportButtonClick}>
                    <img src={editIcon} alt=" " />
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
                    <li>23 กรกฎาคม 2566</li>
                    <li>765 หน้า(116,485คำ)</li>
                    <li>370 บาท(ประหยัด 38%)</li>
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
              Kanokwan Mahakham
            </Text>
          </div>
          <div className="writing-review">
            <div className="give-heart">
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  src={index < clickedHearts ? heartHovered1 : heartDefault1}
                  alt={`Heart ${index + 1}`}
                  className="heart-icon"
                  onClick={() => handleHeartClick(index + 1)}
                  onMouseEnter={() => handleHeartHover(index + 1)}
                  onMouseLeave={() => handleHeartHover(0)}
                />
              ))}
              {/* <p>คุณกดหัวใจ: {clickedHearts}</p>
            <p>คุณชี้หัวใจ: {hoveredHearts}</p>  */}
            </div>
            <div className="writing">
              <Input
                type="text"
                placeholder="เริ่มการรีวิวได้เลยจ้า"
                value={inputReview}
                onChange={handleInputChange}
                size={783}
              />
              <div className="button-review">
                <Button value="ส่งรีวิว" />
              </div>
            </div>
          </div>
        </div>

        <div className="total-review">
          <Text size={30} family={"Anuphan"} weight="600">
            รีวิวทั้งหมด
          </Text>
          <div className="box-reviews">
            <div className="user-review">
              <img src={user}></img>
              <div className="heart-user-review">
                <Text size={15} family={"Anuphan"} weight="500">
                  Kanokwan Mahakham
                </Text>
                <Heart heartCount={3} />
              </div>
            </div>

            <div className="details-review">
              <Text size={15} family={"Anuphan"} weight="500">
                หน้าอ่านมากค่ะ
              </Text>
            </div>
            <div className="like">
              <ButtonIcon
                defaultImg={likeDefault}
                hoveredImg={likeHovered}
                className="icon-button"
              />
              <Text size={12} family={"Anuphan"} weight="500">
                รีวิวเมื่อ 1 วันที่ผ่านมา
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NovelPage;
