import React, { useState } from "react";
import Popup from "../SubComponent/Popup";
import CheckBoxCircle from "../SubComponent/CheckBoxCircle";
import Input from "../SubComponent/Input";
import UploadFile from "../SubComponent/UploadFile";
import Button from "../SubComponent/Button";
import Text from "../SubComponent/Text";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";

const Report = ({ isOpen,className }) => {
  const [popupOpen, setPopupOpen] = useState(isOpen);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [checkBox1, setCheckBox1] = useState("");
  const [checkBox2, setCheckBox2] = useState("");
  const [checkBox3, setCheckBox3] = useState("");
  const [checkBox4, setCheckBox4] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
    console.log(event.target.value)
  };

  const handleReportSubmit = async () => {
    // // แก้ไข URL ของ API ที่ต้องการ POST ข้อมูลตรงนี้
    // const postUrl = "/reports/1/2";

    // try {
    //   const response = await axios.post(postUrl, {
    //     descrip_problem: "inputValue", // รายละเอียดปัญหา
    //     tel: "inputValue1", // เบอร์โทรศัพท์
    //     file_photo: "test",
    //   });

    //   if (response.status === 200) {
    //     togglePopup(); // ปิด Popup เมื่อส่งรายงานสำเร็จ
    //   } else {
    //     console.error("Failed to submit report.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting report:", error);
    // }
    console.log(inputValue1)
  };

  return (
    <div className={className}>
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
                  <CheckBoxCircle value={"มีปัญหาไม่สามารถอ่านได้"} valueOfText={checkBox1}/>
                  <CheckBoxCircle value={"มีเนื้อหาไม่เหมาะสม"} valueOfText={checkBox2}/>
                  <CheckBoxCircle value={"มีปัญหาเรื่องการละเมิดสิทธิ์"} valueOfText={checkBox3}/>
                  <CheckBoxCircle value={"อื่นๆ"} valueOfText={checkBox4}/>
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

              
                <Button
                  className ="button-center"
                  value={"ส่งรายงาน"}
                  functionBtn={handleReportSubmit}
                  handleClose={togglePopup}
                  onChange={handleReportSubmit}
                />
              </div>
          }
        />
      )}
    </div>
    </div>
  );
};
Report.propType = {
  className: PropTypes.string,
  isOpen:PropTypes.bool.isRequired,
};

export default styled(Report)`
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
    max-height: 70%; /* กำหนดสูงสุดของ Popup */
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
  
    .button-center {
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

.button-center:hover {
  color: white; /* Change text color to white */
  background-color: black; /* Change background color to black */
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.pay-button:active {
  box-shadow: none;
  transform: translateY(0);
}
  .name-report{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name-report p{
    margin-bottom: 20px;
    margin-top: 0px;
    text-decoration: underline;
  }
  .red-asterisk {
    color: red;
  }
  .border{
    height: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-color: white;
    margin-bottom: 10px;
  }
  .container{
    font-family: 'Anuphan';
    font-size: 15px;
    font-weight: 500;
  }
  .checkmark {
    width: 20px;
    height: 20px;
  }
  .details-box{
    margin-bottom: 40px;
  }
  .input-details .input-component{
    padding: 8px;
  }
`;



/*
Kanokwan Mahakham
วิธีกรใช้
<Report isOpen={true} />
*/
