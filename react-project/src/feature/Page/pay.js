import React from "react";
import styled from "styled-components"; // Import styled-components library
import Navbar from "../Component/Navbar"; // Replace with actual path
import Text from "../SubComponent/Text";
import Button from '../SubComponent/Button';
import PropTypes from "prop-types";

const PayPage = ({ className }) => {
  return (
    <div className={className}>
      <div className="total-content">
      <div className="container">
        <Text size={40} weight="bold"  family={"Anuphan"}>
          The book-buster
        </Text>
        <Text className="page-title" size={25} weight="bold"  family={"Anuphan"}>
          ชำระเงิน
        </Text>

        <div className="line-divider" />

        <div className="content-box-top">
          <div className="text-box">
            <Text size={18} weight="bold"  family={"Anuphan"}>
              สรุปรายการที่สั่งซื้อ 4 รายการ
            </Text>
            <Text size ={15}  family={"Anuphan"} >
              <ol>{/*ใส่หนังสือที่จะซื้อ*/}ไดโนซอร์รัก                                        ฿303</ol>
              <ol>{/*ใส่หนังสือที่จะซื้อ*/}ไดโนซอร์รัก                                        ฿303</ol>
            </Text>
            <Button className="edit-button" value="กลับไปแก้ไขรายการสั่งซื้อ" />
          </div>
        </div>

        <div className="content-box-bottom">
          <Text className="summary-item" size={18} weight="bold"  family={"Anuphan"}>
            ยอดชำระ $ 399
          </Text>
          <Button className="pay-button" value="ชำระเงิน" />
        </div>

        <Text size={15} color="gray"  family={"Anuphan"}>
          หลังจากที่ท่านชำระเงินเรียบร้อยแล้ว ระบบของ the book-buster.com
          จะใช้เวลาสื่อสารกับตัวกลางชำระเงินประมาณ 10-30 นาที และจะจัดส่ง e-book
          เข้าไปที่ shelf ของท่านโดยไว
        </Text>
      </div>
      </div>
    </div>
  );
};
PayPage.propType = {
  className: PropTypes.string,
};

export default styled(PayPage)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .total-content{
    text-align: center;
  margin-top: 20px;
  }
  .content-box-top,
  .content-box-bottom {
    border-radius: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-box-top {
    background-color: #e1e7e0;
    max-width: 600px;
    margin: 0 auto;
  }

  .summary-item {
    margin-top: 5px;
  
  }

  .pay-button {
    display: flex;
    justify-content: center;
    font-size: 15px;
    background-color: black; /* Change background color */
    border-radius: 30px;
    box-sizing: border-box;
    color: white; /* Change text color to black */
    border: none;
    padding: 5px 30px;
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

  .edit-button {
    border : none;
    margin-top: 30px;
    color: #000;
    padding: 8px 16px;
    font-size: 14px;
    font-family: Anuphan
  }

  .edit-button:hover {
    color: white; /* Change text color to white */
    background-color: gray; /* Change background color to black */
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  
  .line-divider {
    border-bottom: 2px solid #333;
    margin: 40px;
  }
`;

