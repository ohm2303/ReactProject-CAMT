import React, { useState } from "react";
import Popup from "./SubComponent/Popup";
import Input from "./SubComponent/Input";
import Button from "./SubComponent/Button";
import CheckBoxCircle from "./SubComponent/CheckBoxCircle";
import Text from "./SubComponent/Text";
// create register for author

function RegisterArthor({ click, addData }) {
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
    <div className="register-author">
      {popupOpen && (
        <Popup
          handleClose={togglePopup}
          content={
            <>
              <div className="register-form">
                <h1>สมัครขายหนังสือ</h1>
                <hr />
                <Text size={18}>
                  หลังจากที่ลงทะเบียนเป็นนักเขียน/สำนักพิมพ์แล้ว
                  ต้องรอการอนุมัติจากเจ้าหน้าที่ของ meb ก่อน
                  ขั้นตอนนี้ใช้เวลาประมาณ 1 วันทำการ
                  เมื่อเจ้าหน้าที่ได้ทำการอนุมัติบัญชีผู้ใช้ของท่านแล้ว
                  ท่านสามารถเพิ่มและอัปโหลดหนังสือเข้ามาในระบบได้ทันที
                </Text>
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
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  size={"560px"}
                />

                <p className="input-description">
                  Retype Password
                  <span className="input-description-side">*</span>
                </p>
                <Input
                  type="password"
                  placeholder="Retype Password"
                  value={passwordRetype}
                  onChange={(e) => setPasswordRetype(e.target.value)}
                  size={"560px"}
                />

                <p className="input-description">
                  Email
                  <span className="input-description-side">*</span>
                </p>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size={"560px"}
                />

                <p className="input-description">
                  Display Name
                  <span className="input-description-side">*</span>
                </p>
                <Input
                  type="text"
                  placeholder="Display Name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  size={"560px"}
                />

                <p className="input-description">
                  Gender
                  <span className="input-description-side">*</span>
                </p>
                <CheckBoxCircle
                  value="Male"
                  textBox="ชาย"
                  checked={gender === "Male"}
                  onChange={(e) => setGender("Male")}
                />
                <CheckBoxCircle
                  value="Female"
                  textBox="หญิง"
                  checked={gender === "Female"}
                  onChange={(e) => setGender("Female")}
                />
                <CheckBoxCircle
                  value="Other"
                  textBox="อื่นๆ"
                  checked={gender === "Other"}
                  onChange={(e) => setGender("Other")}
                />
                <div className="submit-button-container">
                  <Button
                    value="ส่งข้อมูล"
                    functionBtn={onSubmit}
                    handleClose={togglePopup}
                  />
                </div>
              </div>
            </>
          }
        />
      )}
    </div>
  );
}

// Export
export default RegisterArthor;
