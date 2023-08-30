import React, { useState } from "react";

import GrayBackground from "../SubComponent/GrayBackground";
import Text from "../SubComponent/Text";
import Input from "../SubComponent/Input";
import Button from "../SubComponent/Button";
import '../style/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'



//create Login

   function Login(){

    return (
        <>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap" rel="stylesheet"></link>
        <div className="popupBackground" >
        <div className="iconXmark">
        <FontAwesomeIcon icon={faCircleXmark} size="xs"  onClick={console.log("test1")} />
        </div>
        <div style={{lineHeight: "0px"}}>
        <Text size={45} family={'Doknatle'} children={"The book-buster"} weight={"600"}/>
        <hr className="style2"/>
        </div>
        <Text size={22} family={'Noto Serif Thai'} children={"เข้าสู่ระบบด้วยบัญชี"} weight={"600"} />
        <div>
        <Input type="text" placeholder="username"size={"60%"} heightSize={"3vh"} />
        </div>
        <div>
        <Input type="password" placeholder="password"size={"60%"} heightSize={"3vh"}/>
        </div>

       <div style={{display:"flex",lineHeight: "30px"}}>
            <div style={{display:"block",flexGrow: "1"}}>
            <Text size={12} family={'Noto Serif Thai'} children={"จำไว้ในระบบ"} weight={"600"} />
            </div>

            <div style={{display:"block",flexGrow: "1"}}>
            <Text size={12} family={'Noto Serif Thai'} children={"ลืมรหัสผ่าน?"}  weight={"600"}/>
            </div>
       </div>
      
        <Button value={"ล็อกอินเข้าสู่ระบบ"} functionBtn={console.log("test")} css={"textButtonLogin"} />
        <hr style={{border: "0px solid white"}}></hr>
        <div style={{lineHeight: "0px"}}>
        <Text size={16 } family={'Noto Serif Thai'} children={"หากยังสมัครบัญชีโปรด"} weight={"600"} />
        <div style={{display:"flex",justifyContent: "center"}}>
            <div style={{display:"block",flexGrow: "1"}}>
            <Button value={"สมัครสมาชิกสำหรับผู้ขาย"} functionBtn={console.log("test")}  css={"textButton"}/>
            </div>
            <div style={{display:"block",flexGrow: "1"}}>
            <Button value={"สมัครสมาชิกสำหรับผู้ขาย"} functionBtn={console.log("test")} css={"textButton"}/>
            </div>
        </div>
        </div>
        </div>

        <div style={{zIndex: '1',position: 'fixed' ,top: '50%', left: '50%', transform: 'translate(-50%, -50%)',backgroundColor: 'gray', width: '100%', height: '100%', opacity: '0.5'}}> 
      </div>

        </>
      
    );
   }


//export
export default Login;