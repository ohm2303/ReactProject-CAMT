import React from 'react'
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const stylestupid = {
  
}
const Button = (props) =>{
    const {value,icon,className,id,onClick} = props
  return (
    <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap" rel="stylesheet"></link>
  <button onClick={onClick} className={`ButtonNormal `+className} type='submit' >
    <div style={{display:"flex",justifyContent: "center"}}>
      <span className='iconInButtons'>{icon}</span>
      <span className='textInButtons'>{value}</span>
    </div>
  </button>
    </>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export  default Button


// แก้ไขเกี่ยวกับปุ่ม ใช้ className ได้เลย
// ย้ายตำเเหน่งปุ่ม ตัวอักษร  แก้ใน @media ก็ได้ เลือกตามขนาดหน้าจอ ตัวอย่างการใช้Button > selectForpay component
 