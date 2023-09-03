import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../SubComponent/Popup";
import Input from "../SubComponent/Input";
import Text from "../SubComponent/Text";
import Button from "../SubComponent/Button";
import CheckBoxCircle from "../SubComponent/CheckBoxCircle";
import axios from "axios";
import PropTypes from "prop-types";

import {useDispatch, useSelector} from "react-redux";
import { hideregister } from "../../store/showloginSlice"

const RegisterReader = ({ className }) => {
  const popupOpen = useSelector((state) => state.login.register);
  const dispatch = useDispatch();

  const togglePopup = () => {
    dispatch(hideregister())
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRetypePasswordChange = (event) => {
    setRetypePassword(event.target.value);
  };

  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const handleRegisterSubmit = () => {
    //send data
    togglePopup();
  };

  const onSubmit = () => {
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(selectedGender)
    console.log(displayName)
    console.log(retypePassword)

    if(password != retypePassword){
      alert("password doesn't match")
      setPassword("")
      setRetypePassword("")
      return; // ไม่ต้องดำเนินการถัดไปถ้ารหัสผ่านไม่ตรงกัน
    }
    const postDataToServer = async () => {
      try{
        const url = "/users";
        const dataToSan = {
          email:email,
          username:username,
          password:password,
          gender:selectedGender,
          display_name:displayName
        }
        const response = await axios.post(url,dataToSan);

        console.log("คำขอ POST สำเร็จ:", response.data);
        alert(`create success`)
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการส่งคำขอ POST:", error);
        alert(`error`)
      }
    }
    // เรียกใช้งานฟังก์ชันสำหรับการส่งคำขอ POST เมื่อคอมโพเนนต์ถูกโหลด
    postDataToServer();
  }


return (
  <div className={className}>
  <div className="register-popup">
    {popupOpen && (
      <Popup
        handleClose={togglePopup}
        content={
          <div className="details">
            <div className="details-box">
              <div className="name-report">
                <Text size={30} family={"Anuphan"} weight="bold">
                สมัครสมาชิก The book-buster Account
                </Text>
              </div>
            <div className="input-details">
              <div className="details-box">
                <div className="text-name">
                  <Text size={20} family={"Anuphan"} weight="600">
                  Username{" "}
                    <span className="red-asterisk"> * 4 - 32 chars [A-Z, 0-9,_-@.]</span>
                  </Text>
                </div>
                <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                size={"560px"}
              />
              </div>

              <div className="details-box">
                <div className="text-name">
                  <Text size={20} family={"Anuphan"} weight="600">
                  Password
                    <span className="red-asterisk">* ระบุอย่างน้อย 8 ตัว</span>
                  </Text>
                </div>
                <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                size={"560px"}
              />
              </div>

              <div className="details-box">
                <div className="text-name">
                  <Text size={20} family={"Anuphan"} weight="600">
                    Retype Password 
                    <span className="red-asterisk">*</span>
                  </Text>
                </div>
                <Input
                type="password"
                placeholder="Retype Password"
                value={retypePassword}
                onChange={handleRetypePasswordChange}
                size={"560px"}
              />
              </div>

              <div className="details-box">
                <div className="text-name">
                  <Text size={20} family={"Anuphan"} weight="600">
                  Email
                    <span className="red-asterisk">*</span>
                  </Text>
                </div>
                <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                size={"560px"}
              />
              </div>

              <div className="details-box">
                <div className="text-name">
                  <Text size={20} family={"Anuphan"} weight="600">
                  Display name 
                    <span className="red-asterisk">*</span>
                  </Text>
                </div>
                <Input
                type="text"
                placeholder="Display Name"
                value={displayName}
                onChange={handleDisplayNameChange}
                size={"560px"}
              />
              </div>
            </div>

            <div className="check-box">
                <div className="text-name">
                  <Text size={20} family={"Anuphan"} weight="600">
                  Gender
                    <span className="red-asterisk">*</span>
                  </Text>
                </div>
                <CheckBoxCircle value="Male"  checked={selectedGender === "Male"} onClick={() => handleGenderChange("Male")} />
                <CheckBoxCircle value="Female" checked={selectedGender === "Female"} onClick={() => handleGenderChange("Female")} />
                <CheckBoxCircle value="Other"   checked={selectedGender === "Other"} onClick={() => handleGenderChange("Other")} />
              </div>
            </div>

            
              <Button
                className ="button-center"
                value={"ส่งรายงาน"}
                functionBtn={handleRegisterSubmit}
                handleClose={togglePopup}
                onClick={onSubmit}
              />
            </div>
        }
      />
    )}
  </div>
  </div>
);
};

RegisterReader.propType = {
  className: PropTypes.string,
  isOpen:PropTypes.bool.isRequired,
};

export default styled(RegisterReader)`
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
  margin-top:50px;
  z-index: 2;
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
  font-size : 12px
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


