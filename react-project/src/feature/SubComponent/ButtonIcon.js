import React, { useRef } from "react";
import PropTypes from "prop-types";

const ImageToggleOnMouseOver = ({ defaultImg, hoveredImg }) => {
  const imageRef = useRef();

  return (
    <img
      onMouseOver={() => (imageRef.current.src = hoveredImg)}
      onMouseOut={() => (imageRef.current.src = defaultImg)}
      src={defaultImg}
      alt=""
      ref={imageRef}
    />
  );
};

const ButtonIcon = ({ defaultImg, hoveredImg, onClick, text }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      <ImageToggleOnMouseOver defaultImg={defaultImg} hoveredImg={hoveredImg} />
      <span>{text}</span>
    </button>
  );
};

ButtonIcon.propTypes = {
  defaultImg: PropTypes.string.isRequired,
  hoveredImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default ButtonIcon;

/* 
Kanokwan Mahakham
วิธีการใช้
    <ButtonIcon
        defaultImg={cross}   //เป็นรูปแรกที่เห็น
        hoveredImg={cross1}  //เป็นรูปที่เปลี่ยนไปเมื่อเอาเมาส์ไปชี้
        text={""}           //ข้อความให้ปุ่มicon
        onClick={handleClosePopup} // ส่งฟังก์ชันที่จะทำงานเมื่อปุ่มถูกคลิก 
        อันนี้แล้วแต่ว่าต้องการเขียนคำสั่งลงไปเมื่อกด click
    />
*/
