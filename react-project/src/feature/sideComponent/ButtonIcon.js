import React from "react";
import PropsTypes from "prop-types";

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

const ButtonIcon = ({ defaultImg, hoveredImg, url, title }) => {

    const handleLinkClick = () => {
        window.location.href = url;
      };

  return (
    <button className="icon-button" onClick={handleLinkClick}>
      <ImageToggleOnMouseOver defaultImg={defaultImg} hoveredImg={hoveredImg} />

      <a href={url} target="_blank" rel="noopener noreferrer"></a>
      {title}
    </button>
  );
};

ButtonIcon.propsTypes = {
  defaultImg: PropsTypes.string.isRequired,
  hoveredImg: PropsTypes.string.isRequired,
  url: PropsTypes.string,
  title: PropsTypes.string,
};
export default ButtonIcon;
