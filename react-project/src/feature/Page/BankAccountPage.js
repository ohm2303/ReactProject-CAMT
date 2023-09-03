import React from "react";
import styled from "styled-components"; // Import styled-components library
import Text from "../SubComponent/Text";
import Input from "../SubComponent/Input"; // Import the Input component
import Navbar from "../Component/Navbar";
import Button from "../SubComponent/Button";
import PropTypes from "prop-types";


const BankAccountPage = ({ className }) => {
  return (
    <div className={className}>
      <div className="total-content">
        <Text size={40} weight="bold"  family={"Anuphan"} >
          The book-buster
        </Text>
        <Text className="page-title" size={25} weight="bold"  family={"Anuphan"} >
          ชำระเงิน
        </Text>

        <div className="line-divider" />




        <div className="form-container">
          
          <div className="form-field">
            <Text size={18} weight="bold"  family={"Anuphan"}>
              E-mail ของคุณ *
            </Text>
            <Input
              className="form-input"
              type="text"
              placeholder="กรอกอีเมลของคุณ"
              width = "450px"
            />
            <p className="form-note">
              ระบบจะส่งข้อมูลการโอนเงินไปให้ที่อีเมลนี้ หากอีเมลไม่ถูกต้อง โปรดแก้ไข
            </p>
          </div>
          
          <div className="form-field" >
            <Text  size={18} weight="bold"  family={"Anuphan"}>
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
            <Text size={18} weight="bold" family={"Anuphan"}>
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
            <Text size={12} color="red" family={"Anuphan"}>
              กรุณาชำระเงินภายในวันที่ 08 ส.ค. 2566 เวลา 23:10 น.
            </Text>
            
            <Button className="pay-button" value="ชำระเงิน" />
          </div>
        </div>
        </div>
    </div>
  );
};

BankAccountPage.propType = {
  className: PropTypes.string,
};

export default styled(BankAccountPage)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
 
.total-content{
text-align: center;
  margin-top: 20px;
}
  

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
    border-radius: 25px;
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
    font-family : Anuphan
  }

  .deadline-container {
    text-align: right;
    margin-top: 20px;
  }

  .pay-button {
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

.pay-button:hover {
  color: white; /* Change text color to white */
  background-color: black; /* Change background color to black */
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.pay-button:active {
  box-shadow: none;
  transform: translateY(0);
}

`;
