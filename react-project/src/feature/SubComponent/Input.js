// Input.js

import React from 'react';
import PropTypes from 'prop-types';

const style = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  width: '100%',
};

const Input = ({ css ,type, placeholder, value, onChange, size, heightSize} ) => {
  const inputStyle = size ? { ...style, width: size,height: heightSize } : style;
  
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
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
};

export default Input;
