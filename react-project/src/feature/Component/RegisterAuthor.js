import React, { useState } from "react";
import Popup from "../SubComponent/Popup";
import Input from "../SubComponent/Input";
import Button from "../SubComponent/Button";
import CheckBoxCircle from "../SubComponent/CheckBoxCircle";
import Text from "../SubComponent/Text";
import styled from "styled-components";
import axios from "axios";
import useFetch from "../Hook/useFetch";
import PropTypes from "prop-types";
// create register for author


import {useDispatch, useSelector} from "react-redux";
import { hideregister2 } from "../../store/showloginSlice"

function RegisterArthor({ className }) {
  // Set useState
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [idcard, setIdcard] = useState("");
  const [numbank, setNumbank] = useState("");
  const [namebank, setNamebank] = useState("");

  const popupOpen = useSelector((state) => state.login.register2);
  const dispatch = useDispatch();

  const Api_Novel = `/users`;
  const { data } = useFetch(Api_Novel);
  // Set Popup
  const togglePopup = () => {
    dispatch(hideregister2())
  };
  // close popup when user do something
  const closePopup = () => {
    togglePopup();
  };

  // Add event (e)
  const onSubmit = async () => {
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(passwordRetype);
    console.log(gender);
    console.log(displayName);
  
    if (password !== passwordRetype) {
      alert("password doesn't match");
      setPassword("");
      setPasswordRetype("");
      return; // ไม่ต้องดำเนินการถัดไปถ้ารหัสผ่านไม่ตรงกัน
    }
  
    try {
      // สร้างผู้ใช้และรับข้อมูลผู้ใช้ที่สร้างกลับมา
      const createUserResponse = await axios.post("/users/bank", {
        email: email,
        username: username,
        password: password,
        gender: gender,
        display_name: displayName,
        level: 1,
      });
  
      const createdUser = createUserResponse.data;
  
      console.log("คำขอ POST สำเร็จ:", createdUser);
  
      // ทำการ POST ข้อมูลธนาคารด้วย ID ของผู้ใช้ที่สร้าง
      const postDataToServerBank = async () => {
        try {
          const url = `/banks/add/${createdUser}`;
          const dataToSan = {
            bank_account_number: numbank,
            id_card_number: idcard,
            identity: name + " " + surname,
            namebank: namebank,
          };
          const response = await axios.post(url, dataToSan);
  
          console.log("คำขอ POST สำเร็จ:", response.data);
          alert("success")
        } catch (error) {
          console.error("เกิดข้อผิดพลาดในการส่งคำขอ POST ข้อมูลธนาคาร:", error);
          alert("wrong")
        }
      };
  
      // เรียกใช้งานฟังก์ชันสำหรับการส่งคำขอ POST ข้อมูลธนาคาร
      postDataToServerBank();
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการส่งคำขอ POST ผู้ใช้:", error);
    }
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
                  <Text size={12} family={"Anuphan"}>
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
                          <span className="red-asterisk">
                            {" "}
                            * 4 - 32 chars [A-Z, 0-9,_-@.]
                          </span>
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
                          <span className="red-asterisk">
                            * ระบุอย่างน้อย 8 ตัว
                          </span>
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
                    <CheckBoxCircle
                      value="Male"
                      checked={gender === "Male"}
                      onClick={(e) => setGender("Male")}
                    />
                    <CheckBoxCircle
                      value="Female"
                      checked={gender === "Female"}
                      onClick={(e) => setGender("Female")}
                    />
                    <CheckBoxCircle
                      value="Other"
                      checked={gender === "Other"}
                      onClick={(e) => setGender("Other")}
                    />
                  </div>
                </div>

                {/* BANK */}
                <Text size={30} family={"Anuphan"} weight="bold">
                  ข้อมูลธนาคาร
                </Text>

                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      Name
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    size={"560px"}
                  />
                </div>

                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      Surname
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <Input
                    type="text"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    size={"560px"}
                  />
                </div>

                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      เลขบัตรประชาชน
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <Input
                    type="text"
                    placeholder="เลขบัตรประชาชน"
                    value={idcard}
                    onChange={(e) => setIdcard(e.target.value)}
                    size={"560px"}
                  />
                </div>

                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      เลขบัญชีธนาคาร
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <Input
                    type="text"
                    placeholder="เลขบัญชีธนาคาร"
                    value={numbank}
                    onChange={(e) => setNumbank(e.target.value)}
                    size={"560px"}
                  />
                </div>

                <div className="details-box">
                  <div className="text-name">
                    <Text size={20} family={"Anuphan"} weight="600">
                      ชื่อธนาคาร
                      <span className="red-asterisk">*</span>
                    </Text>
                  </div>
                  <Input
                    type="text"
                    placeholder="ชื่อธนาคาร"
                    value={namebank}
                    onChange={(e) => setNamebank(e.target.value)}
                    size={"560px"}
                  />
                </div>

                <Button
                  className="button-center"
                  value={"ส่งรายงาน"}
                  onClick={onSubmit}
                  handleClose={togglePopup}
                />
              </div>
            }
          />
        )}
      </div>
    </div>
  );
}

RegisterArthor.propType = {
  className: PropTypes.string,
  isOpen:PropTypes.bool.isRequired,
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
    font-family: Anuphan;
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
  .name-report {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name-report p {
    margin-bottom: 20px;
    margin-top: 0px;
    text-decoration: underline;
  }
  .red-asterisk {
    color: red;
    font-size: 12px;
  }
  .border {
    height: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-color: white;
    margin-bottom: 10px;
  }
  .container {
    font-family: "Anuphan";
    font-size: 15px;
    font-weight: 500;
  }
  .checkmark {
    width: 20px;
    height: 20px;
  }
  .details-box {
    margin-bottom: 40px;
  }
  .input-details .input-component {
    padding: 8px;
  }
`;

/*
Kanokwan Mahakham
วิธีกรใช้
<Report isOpen={true} />
*/
