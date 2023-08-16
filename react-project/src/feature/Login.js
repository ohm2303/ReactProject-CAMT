import React from "react";

import GrayBackground from "./SubComponent/GrayBackground";
import Text from "./SubComponent/Text";
import Input from "./SubComponent/Input";
import Button from "./SubComponent/Button";
import './Login.css';

//create Login

   function Login(){
    return (
        <>
  
        <div className="popupBackground" >
 
        <div style={{lineHeight: "8px"}}>
        <Text size={45} family={'Doknatle'} children={"The book-buster"}  />
        <hr className="style1"/>
        </div>

        <Text size={18} family={'Noto Serif Thai'} children={"เข้าสู่ระบบด้วยบัญชี"} />
        <div>
        <Input type="text" placeholder="username"size={"small"}  />
        </div>
        <div>
        <Input type="password" placeholder="password"size={"40%"} />
        </div>

       <div style={{display:"flex"}}>
            <div style={{display:"block",flexGrow: "1"}}>
            <Text size={12} family={'Noto Serif Thai'} children={"จำไว้ในระบบ"} />
            </div>

            <div style={{display:"block",flexGrow: "1"}}>
            <Text size={12} family={'Noto Serif Thai'} children={"ลืมรหัสผ่าน?"} />
            </div>
       </div>
        <Button value={"ล็อกอินเข้าสู่ระบบ"} functionBtn={console.log("test")} />
        <Text size={18} family={'Noto Serif Thai'} children={"หากยังสมัครบัญชีโปรด"} />
        <div style={{display:"flex"}}>
            <div style={{display:"block",flexGrow: "1"}}>
            <Button value={"สมัครสมาชิกสำหรับผู้ซื้อ"} functionBtn={console.log("test")} css={"textButton"} />
            </div>
            <div style={{display:"block",flexGrow: "1"}}>
            <Button value={"สมัครสมาชิกสำหรับผู้ขาย"} functionBtn={console.log("test")} css={"textButton"}/>
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