import React from "react";
import ButtonIcon from "./ButtonIcon";
import cross from "../../pics/Icon/cross-circle.png";
import cross1 from "../../pics/Icon/cross-circle (1).png";
import './Popup.css'

const Popup = (props) => {
  const handleClosePopup = () => {
    props.handleClose(); // เรียกใช้งานฟังก์ชันที่ส่งมาจาก parent component
  };

  return (
    <div className="popup-box">
      <div className="box">
        <div className="icon-buttonPopup">
          <ButtonIcon
            defaultImg={cross}
            hoveredImg={cross1}
            url={"/"}
            title={""}
            onClick={handleClosePopup} // ส่งฟังก์ชันที่จะทำงานเมื่อปุ่มถูกคลิก
          />
        </div>
        <div className="popup-content">{props.content}</div>
      </div>
    </div>
  );
};

export default Popup;

