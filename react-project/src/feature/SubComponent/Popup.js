import React from "react";
import ButtonIcon from "./ButtonIcon";
import cross from "../../pics/Icon/cross-circle.png";
import cross1 from "../../pics/Icon/cross-circle (1).png";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Popup = (props,{className}) => {
  const handleClosePopup = () => {
    props.handleClose(); // เรียกใช้งานฟังก์ชันที่ส่งมาจาก parent component
  };

  return (
    <div className={className}>
    <div className="popup-box">
      <div className="box">
        <div className="icon-buttonPopup">
          <ButtonIcon
            defaultImg={cross}
            hoveredImg={cross1}
            onClick={handleClosePopup} // ส่งฟังก์ชันที่จะทำงานเมื่อปุ่มถูกคลิก
          />
        </div>
        <div className="popup-content">{props.content}</div>
      </div>
    </div>
    </div>
  );
};

Popup.propTypes = {
  className: PropTypes.string,
  props:PropTypes.any,
};

//ส่วนนี้ไปแก้ css ของแต่ละหน้าได้เลยไม่ต้องมาแก้ที่นี้นะ
export default styled(Popup)`
.popup-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .box {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    width: 600px;
    height: 700px;
    overflow: auto;
    position: relative;
  }
  
  .icon-buttonPopup {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .popup-content {
    margin-top: 20px;
  }
`;

/* 
Kanokwan Mahakham
วิธีการใช้

ไว้ setเปิด-ปิด popup
const [popupOpen, setPopupOpen] = useState(isOpen);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  //เสริม สำหรับคนที่มีปุ่ม กดส่ง
  const handleSubmit = () => {
    togglePopup(); // ปิด Popup เมื่อกดปุ่มส่งรายงาน
  };

return{
{popupOpen && (
        <Popup
          handleClose={togglePopup}
          content={ *ในนี้ใส่รายละเอียดต่างๆที่อยากใส่เลยจ๊ะ

            //เสริม สำหรับคนที่มีปุ่ม กดส่ง
          <div className="button-center">
                <Button value={'ส่งรายงาน'} functionBtn={handleSubmit} handleClose={togglePopup} />
          </div>
          }
          
        />
      )}
 }
*/