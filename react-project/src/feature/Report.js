import React, { useState } from "react";
import Popup from "./SubComponent/Popup";
import CheckBoxCircle from "./SubComponent/CheckBoxCircle";
import Input from "./SubComponent/Input";
import UploadFile from "./SubComponent/UploadFile";
import Button from "./SubComponent/Button";
import Text from "./SubComponent/Text";
import "./Report.css";

const Report = ({ isOpen }) => {
  const [popupOpen, setPopupOpen] = useState(isOpen);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleReportSubmit = () => {
    togglePopup(); // ปิด Popup เมื่อกดปุ่มส่งรายงาน
  };

  return (
    <div className="report-popup">
      {popupOpen && (
        <Popup
          handleClose={togglePopup}
          content={
            <div className="details">
              <div className="details-box">
                <div className="name-report">
                  <Text size={40} family={"Anuphan"} weight="500">
                    แจ้งปัญหาที่พบ
                  </Text>
                </div>

                <div className="check-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      หนังสือเล่มนี้มีปัญหาอะไร{" "}
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <CheckBoxCircle value={"มีปัญหาไม่สามารถอ่านได้"} />
                  <CheckBoxCircle value={"มีเนื้อหาไม่เหมาะสม"} />
                  <CheckBoxCircle value={"มีปัญหาเรื่องการละเมิดสิทธิ์"} />
                  <CheckBoxCircle value={"อื่นๆ"} />
                </div>
              </div>

              <div className="input-details">
                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      รายละเอียด (บอกด้วยว่า หน้าไหน บทไหน){" "}
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>

                  <Input
                    type="text"
                    placeholder="กรอกรายละเอียดปัญหาตรงนี้เลยจ้า"
                    value={inputValue}
                    onChange={handleInputChange}
                    size={"560px"}
                  />
                </div>
                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      แนปรูปภาพ เพื่อให้เราเข้าใจปัญหาได้มากขึ้น{" "}
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>

                  <UploadFile />
                </div>
                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      เบอร์โทรของคุณ สำหรับสอบถามเพิ่มเติม{" "}
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <Input
                    type="text"
                    placeholder="กรอกเบอร์โทรตรงนี้เลยจ้า"
                    value={inputValue1}
                    onChange={handleInputChange1}
                    size={"560px"}
                  />
                </div>
              </div>

              <div className="button-center">
                <Button
                  value={"ส่งรายงาน"}
                  functionBtn={handleReportSubmit}
                  handleClose={togglePopup}
                />
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};
export default Report;

/*
Kanokwan Mahakham
วิธีกรใช้
<Report isOpen={true} />
*/
