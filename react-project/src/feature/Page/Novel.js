import React, { useState } from "react";
import Text from "../SubComponent/Text";
import Button from "../SubComponent/Button";
import ButtonIcon from "../SubComponent/ButtonIcon";
import Report from "../Report";
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

const NovelPage = () => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const handleReportButtonClick = () => {
    setIsReportOpen(!isReportOpen);
  };
  const photoNovel = require("../../pics/Noval/นางมาร.jpeg");
  const editIcon = require("../../pics/Icon/edit.png");
  const heart = require("../../pics/Icon/red-heart.png");

  return (
    <>
      <div className="detail-novel">
        <Text size={50} family={"Anuphan"} className="text-name" weight="500">
          นางมาร
        </Text>
        <div className="content">
          <div className="photo-novel">
            <img src={photoNovel} alt=" " />
          </div>

          <div className="detail-left-box">
            <div className="detail-book">
              <Text size={18} family={"Anuphan"} weight="600">
                <ul>
                  <li>โดย </li>
                  <li>หมวดหมู่ </li>
                  <li>ราคา </li>
                </ul>
              </Text>
            </div>
            <div className="total-button">
              <Button value="ทดลองอ่าน" />
              <Button value="ซื้อ 300 บาท" />
            </div>

            <div className="rating">
              <div className="heart">
                <p className="heart-rating">4.96</p>
                <div className="heart-images">
                  <img src={heart} />
                  <img src={heart} />
                  <img src={heart} />
                  <img src={heart} />
                  <img src={heart} />
                </div>
              </div>
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
                <p>แจ้งปัญหาที่พบ</p>
              </div>

              {isReportOpen && <Report isOpen={true} />}
            </div>
            <div className="detail-file">
              <Text size={18} family={"Anuphan"} weight="600">
                <ul>
                  <li>ประเภท</li>
                  <li>วันที่วางขาย</li>
                  <li>ความยาว</li>
                  <li>ราคาปก</li>
                </ul>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NovelPage;
