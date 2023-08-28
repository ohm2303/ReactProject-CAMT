
import React from 'react';
import PropTypes from 'prop-types';
const style = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  width: '100%',
};
const Input = ({ type, placeholder, value, onChange, size, heightSize, padding, fontSize, width }) => {
  const inputStyle = {
    ...style,
    width: width || size || style.width,
    height: heightSize || style.height,
    padding: padding || style.padding, 
    fontSize: fontSize || style.fontSize, 
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={inputStyle}      
    />
  );
};
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
  size: PropTypes.string,
  padding: PropTypes.string, 
  fontSize: PropTypes.string, 
};
export default Input;