import React from "react";
import ButtonIcon from "./ButtonIcon";
import cross from "../../pics/Icon/cross-circle.png";
import cross1 from "../../pics/Icon/cross-circle (1).png";
import '../style/Popup.css'

const Popup = (props) => {
  const handleClosePopup = () => {
    props.handleClose(); // เรียกใช้งานฟังก์ชันที่ส่งมาจาก parent component
  };

  return (
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
  );
};

export default Popup;

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