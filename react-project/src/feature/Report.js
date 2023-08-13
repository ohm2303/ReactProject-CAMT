import React, { useState } from "react";
import Popup from "./SubComponent/Popup";
import CheckBoxCircle from "./SubComponent/CheckBoxCircle";
import Input from "./SubComponent/Input";
import UploadFile from "./SubComponent/UploadFile";
import Button from "./SubComponent/Button";

const Report = ({ x }) => {
  const [popupOpen, setPopupOpen] = useState(x);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleReportSubmit = () => {
    // ทำอะไรก็ได้เมื่อผู้ใช้กดปุ่มส่งรายงาน
    // เช่น ส่งข้อมูลไปที่เซิร์ฟเวอร์ หรือปิดหน้า Popup
    togglePopup(); // ปิด Popup เมื่อกดปุ่มส่งรายงาน
  };

  return (
    <div className="report-popup">
      {popupOpen && (
        <Popup
          handleClose={togglePopup}
          content={
            <div className="details">
              <h1>แจ้งปัญหาที่พบ</h1>
              <div className="check-box">
                <h2>หนังสือเล่มนี้มีปัญหาอะไร*</h2>
                <CheckBoxCircle value={"มีปัญหาไม่สามารถอ่านได้"} />
                <CheckBoxCircle value={"มีเนื้อหาไม่เหมาะสม"} />
                <CheckBoxCircle value={"มีปัญหาเรื่องการละเมิดสิทธิ์"} />
                <CheckBoxCircle value={"อื่นๆ"} />
              </div>
              <div className="input-details">
                <h2>รายละเอียด (บอกด้วยว่า หน้าไหน บทไหน)*</h2>
                <Input
                  type="text"
                  placeholder="กรอกรายละเอียดปัญหาตรงนี้เลยจ้า"
                  value={inputValue}
                  onChange={handleInputChange}
                  size={"560px"}
                />

                <h2>แนปรูปภาพ เพื่อให้เราเข้าใจปัญหาได้มากขึ้น</h2>
                <UploadFile />

                <h2>เบอร์โทรของคุณ สำหรับสอบถามเพิ่มเติม*</h2>
                <Input
                  type="text"
                  placeholder="กรอกเบอร์โทรตรงนี้เลยจ้า"
                  value={inputValue}
                  onChange={handleInputChange}
                  size={"560px"}
                />
              </div>
            
              <div className="button-center">
                <Button value={'ส่งรายงาน'} functionBtn={handleReportSubmit} handleClose={togglePopup} />
              </div>
              
            </div>
          }
        />
      )}
    </div>
  );
};
export default Report;
