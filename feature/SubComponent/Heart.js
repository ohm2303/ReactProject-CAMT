import React from "react";
import PropTypes from "prop-types";

const Heart = ({ heartCount }) => {
  const roundedHeartCount = Math.ceil(heartCount);
  const heart = require("../../pics/Icon/red-heart.png");

  const heartImages = Array.from({ length: roundedHeartCount }, (_, index) => (
    <img key={index} src={heart} />
  ));

  return (
    <>
      <div className="heart">
        <div className="heart-images">
          {heartImages}
        </div>
      </div>
    </>
  );
};

Heart.propTypes = {
  heartCount: PropTypes.number.isRequired,
};

export default Heart;
