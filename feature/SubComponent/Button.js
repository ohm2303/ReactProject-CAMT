import React from 'react'
import PropTypes from 'prop-types';
import { styled } from 'styled-components';


function Button(props){
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

export  default styled(Button)`
.ButtonNormal{
  border-radius: 30px;
  border: none;
  padding: 1.3%;

  background-image: linear-gradient(
    to right,
    #57646d,
    #edf0f1,
    #0d3142 100%,
    #20385B 200%
  );
  text-shadow: 0 1px 1px #333;
  transition: all 0.25s;
  transform: scale(0.8);
  background-position-x: 0%;
  background-size: 300%;
  height: 5.5vh;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom-width:3px;
  border-bottom-color: #000000;
  border-bottom-style:solid;
  transform: scale(0.9);
}
.ButtonNormal:hover{
  cursor: pointer;
  background-position-x: 100%;
  transform: scale(1.05);
}
.iconInButtons{
  display:block;  
}
.textInButtons{
  display:block;
  padding-left: 15%;
  font-size: 20px;
  font-weight:900;
}

@media(min-width: 768px) {
    .textInButtons{
      padding-left: 15%;
      margin-top: -18%;
      font-size: 17px;
    }
}
@media(min-width: 1025px) {
    .textInButtons{
      padding-left: 15%;
      margin-top: -5%;
      font-size:20px;
    }

@media(min-width: 1201px) {
    .textInButtons{
      padding-left: 5%;
      margin-top: -1%;
      font-size: 15px;
    }
  
}
}
`
;

// แก้ไขเกี่ยวกับปุ่ม ใช้ className ได้เลย
// ย้ายตำเเหน่งปุ่ม ตัวอักษร  แก้ใน @media ก็ได้ เลือกตามขนาดหน้าจอ ตัวอย่างการใช้Button > selectForpay component
 