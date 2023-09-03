import React, { useState,useContext } from "react";
import styled from "styled-components";
import Text from "../SubComponent/Text";
import Input from "../SubComponent/Input";
import Button from "../SubComponent/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Popup from "../SubComponent/Popup";
import { userContext } from "../../App";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { hidelogin, showregister, showregister2 } from "../../store/showloginSlice"

const LoginPopup = styled.div`
  font-family: "Anuphan", sans-serif;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 500px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .iconXmark {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-left: auto;
  }

  .style2 {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, #ccc, #f0f0f0, #ccc);
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
  }

  .textButtonLogin {
    font-size: 18px;
    background-color: black;
    border-radius: 30px;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .textButtonLogin:hover {
    background-color: #333;
  }

  .textButton {
    font-size: 14px;
    color: black;
    border: none;
    cursor: pointer;
    transition: color 0.3s;
  }

  .textButton:hover {
    color: #444;
  }

  .FlexContainer {
    display: flex;
    line-height: 30px;
  }

  .FlexItem {
    display: block;
    flex-grow: 1;
  }

  .CenteredButtonContainer {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .button-q {
    display: flex;
    justify-content: center;
    margin: 3px;
    font-size: 15px;
    background-color: black; /* Change background color */
    border-radius: 30px;
    box-sizing: border-box;
    color: white; /* Change text color to black */
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    align-items: center;
    font-family: Anuphan;
  }

  .button:hover {
    color: white; /* Change text color to white */
    background-color: black; /* Change background color to black */
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  .button:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
function Login(isOpen) {
  const [popupOpen, setPopupOpen] = useState(isOpen);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [data, setData] = useState("");
  const { dataCon, setDataCon } = useContext(userContext);
  const dispatch = useDispatch();
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const checkUser =() => {
    fetch(`${process.env.REACT_APP_API_PREME}/api/user/`,{    
      method:"POST",
      credentials: 'include',
      headers:{
          "Content-Type": "application/json",
      },
    body: JSON.stringify({
      username:username,
      password: password
    })
})
.then(response => response.json())
.then(data => {
setData(data)
if(data=="success"){
  fetch(`${process.env.REACT_APP_API_PREME}/api/user/checkcookie`,{    
    method:"POST",
    credentials: 'include',
    headers:{
        "Content-Type": "application/json",
    },
    })
    .then(response => response.json())
    .then(data => {
    setData(data)
    console.log(data)
    setDataCon({displayname :data[0].display_name, id:data[0].id, email:data[0].email,level:data[0].level})

    })
    dispatch(hidelogin())
  togglePopup()
}
})

}
  
  return (
    <>
      {popupOpen && (
        <Popup
          handleClose={togglePopup}
          content={
            <LoginPopup>
              <FontAwesomeIcon
                className="iconXmark"
                icon={faCircleXmark}
                size="xs"
                onClick={()=>dispatch(hidelogin())}

              />
              <div style={{ lineHeight: "0px" }}>
                <Text
                  size={45}
                  family={"Anuphan"}
                  children={"The book-buster"}
                  weight={"600"}
                />
                <hr className="style2" />
              </div>
              <Text
                size={22}
                family={"Anuphan"}
                children={"เข้าสู่ระบบด้วยบัญชี"}
                weight={"600"}
              />
              <Input
                type="text"
                placeholder="username"
                size={"60%"}
                heightSize={"3vh"}
                value={username} onChange={(e)=>setUsername(e.target.value) } 
              />
              <Input
                type="password"
                placeholder="password"
                size={"60%"}
                heightSize={"3vh"}
                value={password} onChange={(e)=>setPassword(e.target.value) }
              />
              <div className="FlexContainer">
                <div className="FlexItem">
                  <Text
                    size={12}
                    family={"Noto Serif Thai"}
                    children={"จำไว้ในระบบ"}
                    weight={"600"}
                  />
                </div>
                <div className="FlexItem">
                  <Text
                    size={12}
                    family={"Noto Serif Thai"}
                    children={"ลืมรหัสผ่าน?"}
                    weight={"600"}
                  />
                </div>
              </div>
              <div className="CenteredButtonContainer">
                <Button
                  className="button-q"
                  value={"ล็อกอินเข้าสู่ระบบ"}
                  css={"textButtonLogin"}
                  onClick={checkUser}
                />
              </div>
              <div className="FlexContainer">
                <div className="FlexItem">
                  <Text
                    size={16}
                    family={"Noto Serif Thai"}
                    children={"หากยังสมัครบัญชีโปรด"}
                    weight={"600"}
                  />
                </div>
              </div>
              <div className="CenteredButtonContainer">
              <Button
                  className="button-q"
                  value={"สมัครสมาชิกสำหรับผู้ซื้อ"}
                  css={"textButton"}
                  onClick={()=>{dispatch(hidelogin()); dispatch(showregister())} }
                />
                <Button
                  className="button-q"
                  value={"สมัครสมาชิกสำหรับผู้ขาย"}
                  css={"textButton"}
                  onClick={()=>{dispatch(hidelogin()); dispatch(showregister2())} }
                />
              </div>
            </LoginPopup>
          }
        />
      )}
    </>
  );
}

export default Login;
