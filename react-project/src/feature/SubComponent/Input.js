import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import useFetch from '../Hook/useFetch';

const inputStyles = {
  padding: '.50rem .5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  width: '100%',
  backgroundcolor: '#f5f5f5',
  color:' #242424',
  borderradius:' 4px',
  outline:' none',
  lineheight:' 1.15',
  boxshadow:' 0px 10px 20px -18px',
  
};

const StyledInput = styled.input`
  ${inputStyles}
  width: ${props => props.width || props.size || inputStyles.width};
  height: ${props => props.heightSize || inputStyles.height};
  padding: ${props => props.padding || inputStyles.padding};
  font-size: ${props => props.fontSize || inputStyles.fontSize};
  backgroundcolor : ${props => props.backgroundcolor || inputStyles.backgroundcolor};
  color :  ${props => props.color || inputStyles.color};
`;

const Input = ({ type, placeholder, value, onChange, size, heightSize, padding, fontSize, width }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      width={width}
      size={size}
      heightSize={heightSize}
      padding={padding}
      fontSize={fontSize}
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
