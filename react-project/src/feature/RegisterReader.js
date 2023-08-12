import React, { useState } from "react";
import Popup from "./SubComponent/Popup";
import Input from "./SubComponent/Input";
import Button from "./SubComponent/Button";
import CheckBoxCircle from "./SubComponent/CheckBoxCircle";
import './RegisterReaderStyles.css'; 

const RegisterReader = ({ x }) => {
  const [popupOpen, setPopupOpen] = useState(x);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
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

  return (
    <div className="register-popup">
      {popupOpen && (
        <Popup
          handleClose={togglePopup}
          content={
            <div className="register-form">
              <h1>สมัครสมาชิก The book-buster Account</h1>
              <hr />
              <p className = "form-desp">กรุณาใส่ข้อมูลที่มีเครื่งหมาย * ให้ครบถ้วน</p>
              <p className="input-description">
                Username 
                <span className="input-description-side"> 
                * 4 - 32 chars [A-Z, 0-9,_-@.]
                </span>
              </p>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                size={"560px"}
              />
              
              <p className="input-description">
                Password 
                <span className="input-description-side"> 
                * ระบุอย่างน้อย 8 ตัว
                </span>
              </p>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                size={"560px"}
              />

              <p className="input-description">
                Retype Password 
                <span className="input-description-side">
                  *
                </span>
              </p>
              <Input
                type="password"
                placeholder="Retype Password"
                value={retypePassword}
                onChange={handleRetypePasswordChange}
                size={"560px"}
              />

              <p className="input-description">
                Email
                <span className="input-description-side">
                  *
                </span>
              </p>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                size={"560px"}
              />

              <p className="input-description">
                Username
                <span className="input-description-side">
                  *
                </span>
              </p>
              <Input
                type="text"
                placeholder="Display Name"
                value={displayName}
                onChange={handleDisplayNameChange}
                size={"560px"}
              />

              <p className="input-description">
                Gender
                <span className="input-description-side">
                  *
                </span>
              </p>
              <CheckBoxCircle value="Male" textBox="ชาย" checked={selectedGender === "Male"} onChange={() => handleGenderChange("Male")} />
              <CheckBoxCircle value="Female" textBox="หญิง" checked={selectedGender === "Female"} onChange={() => handleGenderChange("Female")} />
              <CheckBoxCircle value="Other" textBox="อื่นๆ" checked={selectedGender === "Other"} onChange={() => handleGenderChange("Other")} />
              
              <div className="submit-button-container">
                <Button value="ส่งข้อมูล" functionBtn={handleRegisterSubmit} handleClose={togglePopup} />
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default RegisterReader;
