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
  <button onClick={onClick} className={`ButtonNormal `+className}  >
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
.ButtonNormal {
  display: flex;
  justify-content: center;
  margin-left: auto;
  font-size: 15px;
  background-color: black; /* Change background color */
  border-radius: 30px;
  box-sizing: border-box;
  color: white; /* Change text color to black */
  border: none;
  padding: 5px 20px;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  align-items: center;
  font-family: Anuphan
}

.ButtonNormal:hover {
  color: white; /* Change text color to white */
  background-color: black; /* Change background color to black */
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.ButtonNormal:active {
  box-shadow: none;
  transform: translateY(0);
}
`
;

// แก้ไขเกี่ยวกับปุ่ม ใช้ className ได้เลย
// ย้ายตำเเหน่งปุ่ม ตัวอักษร  แก้ใน @media ก็ได้ เลือกตามขนาดหน้าจอ ตัวอย่างการใช้Button > selectForpay component
 