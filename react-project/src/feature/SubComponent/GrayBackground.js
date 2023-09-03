import React from 'react'
import PropTypes from "prop-types";

const GrayBackground = (props) => {
    const {children,css}=props
    return <div className={`GrayBackground ` + css}>{children}</div>
}

  
GrayBackground.propTypes = {
    children: PropTypes.string,
    css: PropTypes.string,
  };
export default GrayBackground;

//GlobalStyle