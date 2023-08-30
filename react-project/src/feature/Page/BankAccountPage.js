import React from "react";
import styled from "styled-components"; // Import styled-components library
import Text from "../SubComponent/Text";
import Input from "../SubComponent/Input"; // Import the Input component
import Navbar from "../Component/Navbar";


const BankAccountPage = ({ className }) => {
  return (
    <div className={className}>
      <Navbar />
        <Text size={40} weight="bold" family={'Anuphan'}>
          The book-buster
        </Text>
        <Text className="page-title" size={25} weight="bold" family={'Anuphan'}>
          ชำระเงิน
        </Text>

        <div className="line-divider" />




        <div className="form-container">
          
          <div className="form-field">
            <Text size={18} weight="bold" family={'Anuphan'}>
              E-mail ของคุณ *
            </Text>
            <Input
              className="form-input"
              type="text"
              placeholder="กรอกอีเมลของคุณ"
              size ="450px"
            />
            <p className="form-note">
              ระบบจะส่งข้อมูลการโอนเงินไปให้ที่อีเมลนี้ หากอีเมลไม่ถูกต้อง โปรดแก้ไข
            </p>
          </div>
          
          <div className="form-field">
            <Text size={18} weight="bold" family={'Anuphan'}>
              เบอร์โทร *
            </Text>
            <Input
              className="form-input"
              type="text"
              size ="450px"
              placeholder="กรอกเบอร์โทรของคุณ"
            />
            <p className="form-note">
              หากเกิดความขัดข้อง เราจะติดต่อไปที่เบอร์โทรนี้
            </p>
          </div>
          <div className="form-field">
            <Text size={18} weight="bold" family={'Anuphan'}>
              ชื่อ-นามสกุล
            </Text>
            <Input
              className="form-input"
              type="text"
              size ="450px"
              placeholder="กรอกชื่อ-นามสกุลของคุณ"
            />
            <p className="form-note">
              สามารถเว้นว่างได้หากไม่ต้องการระบุ
            </p>
          </div>
          <div className="deadline-container">
            <Text size={12} color="red"  family={'Anuphan'}>
              กรุณาชำระเงินภายในวันที่ 08 ส.ค. 2566 เวลา 23:10 น.
            </Text>
            <button className="pay-button">ชำระเงิน</button>
          </div>
        </div>
    </div>
  );
};

export default styled(BankAccountPage)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  
  text-align: center;
  margin-top: 20px;

  

  .page-title {
    margin-top: 2px;
  }

  .line-divider {
    border-bottom: 2px solid #333;
    margin: 40px;
  }

  .form-container {
    margin: 20px auto;
    width: 70%;
    background-color: #e1e7e0;
    padding: 20px;
  }

  .form-field {
    margin-bottom: 10px;
  }

  .form-input {
    padding: 10px;
  }


  .form-note {
    font-size: 12px;
    color: gray;
    margin-top: 5px;
  }

  .deadline-container {
    text-align: right;
    margin-top: 20px;
  }

  .pay-button {
    font-size: 14px;
    background-color: black;
    border-radius:10px;
    color: white;
    border: none;
    padding: 10px 16px;
    cursor: pointer;
  }
`;
