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

const ButtonIcon = ({ defaultImg, hoveredImg, onClick }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      <ImageToggleOnMouseOver defaultImg={defaultImg} hoveredImg={hoveredImg} />
      <span>ปิด</span>
    </button>
  );
};

ButtonIcon.propTypes = {
  defaultImg: PropTypes.string.isRequired,
  hoveredImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // รับ prop onClick เพื่อใช้ในการปิด Popup
};

export default ButtonIcon;
