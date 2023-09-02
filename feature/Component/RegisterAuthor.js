import React, { useState } from "react";
import Popup from "../SubComponent/Popup";
import Input from "../SubComponent/Input";
import Button from "../SubComponent/Button";
import CheckBoxCircle from "../SubComponent/CheckBoxCircle";
import Text from "../SubComponent/Text";
import styled from "styled-components";
// create register for author

function RegisterArthor({ click, addData ,className}) {
  // Set useState
  const [popupOpen, setPopupOpen] = useState(click);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");

  // Set Popup
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  // close popup when user do something
  const closePopup = () => {
    togglePopup();
  };

  // Add event (e)
  const onSubmit = (e) => {
    // e.preventDefault();
    // addData({ username, password, passwordRetype, email, displayName });
    togglePopup();
  };
  /* JSX retrun */
  // Icon exit
  // Title 1
  // Description 1
  // Inputbox 7
  // Dropdown 1
  // Curren page and Submit 1,1

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
                สมัครขายหนังสือ
                </Text>
              </div>
              <Text size={12} family={"Anuphan"} >
                หลังจากที่ลงทะเบียนเป็นนักเขียน/สำนักพิมพ์แล้ว
                  ต้องรอการอนุมัติจากเจ้าหน้าที่ของ meb ก่อน
                  ขั้นตอนนี้ใช้เวลาประมาณ 1 วันทำการ
                  เมื่อเจ้าหน้าที่ได้ทำการอนุมัติบัญชีผู้ใช้ของท่านแล้ว
                  ท่านสามารถเพิ่มและอัปโหลดหนังสือเข้ามาในระบบได้ทันที
                </Text>
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
                onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                value={passwordRetype}
                  onChange={(e) => setPasswordRetype(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setDisplayName(e.target.value)}
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
                <CheckBoxCircle value="Male"  
                checked={gender === "Male"} 
                onChange={(e) => setGender("Male")} />
                <CheckBoxCircle value="Female" 
                checked={gender === "Female"} 
                onChange={(e) => setGender("Female")} />
                <CheckBoxCircle value="Other"   
                checked={gender === "Other"}
                onChange={(e) => setGender("Other")}/>
              </div>
            </div>

            
              <Button
                className ="button-center"
                value={"ส่งรายงาน"}
                functionBtn={onSubmit}
                handleClose={togglePopup}
              />
            </div>
        }
      />
    )}
  </div>
  </div>
);
};

export default styled(RegisterArthor)`
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

/*
Kanokwan Mahakham
วิธีกรใช้
<Report isOpen={true} />
*/
