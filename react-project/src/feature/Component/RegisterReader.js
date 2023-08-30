import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../SubComponent/Popup";
import Input from "../SubComponent/Input";
import Button from "../SubComponent/Button";
import CheckBoxCircle from "../SubComponent/CheckBoxCircle";


const RegisterForm = styled.div`
  input {
    background-color: white;
    border: 1px solid black;
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
  }

  .input-description {
    margin-bottom: 8px;
  }

  .input-description-side {
    color: #888;
    font-size: 12px;
  }

  .submit-button-container {
    text-align: right;
    margin-top: 20px;
  }

  .submit-button-container button {
    font-size: 18px;
    background-color: gray;
    color: white;
    border: none;
    padding: 10px 20px;
  }

  .submit-button-container button:hover {
    background-color: black;
    color: white;
  }

  .form-desp {
    text-align: center;
    margin-top: 10px;
    color: gray;
  }
`;

const RegisterReader = ({ input }) => {
  const [popupOpen, setPopupOpen] = useState(input);

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
            <RegisterForm className="register-form">
              <h1>สมัครสมาชิก The book-buster Account</h1>
              <hr />
              <p className="form-desp">กรุณาใส่ข้อมูลที่มีเครื่องหมาย * ให้ครบถ้วน</p>
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
            </RegisterForm>
          }
        />
      )}
    </div>
  );
};

export default RegisterReader;
