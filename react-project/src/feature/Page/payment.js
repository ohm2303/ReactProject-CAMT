import React from "react";
import styled from "styled-components"; // Import styled-components
import Text from "../SubComponent/Text";
import QR from "../../pics/payment/Picture1.png";
import PropTypes from "prop-types";

const PaymentPage = ({ className }) => {
    return (
      <div className={className}>
    <div className="total-content">
      <Text size={40} weight="bold" family={"Anuphan"}>
          The book-buster
        </Text>
        <Text className="page-title" size={25} weight="bold" family={"Anuphan"}>
          รายละเอียดหลังการชำระเงิน
        </Text>
        <div className="line-divider" />

        <div className="content-box">
          <div className="qr-image">
            <img src={QR} alt="QR" />
          </div>
          <div className="content-container">
            <Text className="content-title" size={20} weight="bold" family={"Anuphan"}>
              รายการ e-book ที่คุณจะได้รับหลังการชำระเงิน
            </Text>
            <Text className="content-note" color="gray" size={15} family={"Anuphan"}>
              เมื่อชำระเงินสำเร็จ e-book จะถูกส่งไปยังชั้นหนังสือบนแอพพลิเคชัน the book- buster ภายใน 5 นาที
            </Text>
            <ol>{/*ใส่หนังสือที่จะซื้อ*/}uuiiiii</ol>
            <ol>{/*ใส่หนังสือที่จะซื้อ*/}uuiiiii</ol>
          </div>
        </div>

        <div className="contact-section">
          <Text className="contact-info" size={18} family={"Anuphan"}>หากไม่ได้รับ e-book หรือมีข้อสงสัยใดๆ กรุณาติดต่อสอบถามเราได้ ที่นี่</Text>
          <Text className="contact-info" size={15} family={"Anuphan"}>โทร: 02-962-1698 (จันทร์-ศุกร์ 09.30-19.30 น. ยกเว้นวันหยุดราชการ)</Text>
          <Text className="contact-info" size={15} family={"Anuphan"}>มือถือ: 084-090-3148 (ทุกวัน 09.30-19.30 น.)</Text>
          <Text className="contact-info" size={15} family={"Anuphan"}>E-mail: support@the_book-buster.com (ทุกวัน 24 ชั่วโมง)</Text>
        </div>
        </div>
      </div>
    
  );
};

PaymentPage.propType = {
  className: PropTypes.string,
};

export default styled(PaymentPage)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");

.total-content{
  text-align: center;
  margin-top: 20px;
  font-family: "Anuphan";
}
  
  .content-box {
    display: flex;
    margin-top: 30px;

    .qr-image {
      flex: 1;
      img {
        max-width: 60%;
        height: auto;
      }
    }

    .content-container {
      flex: 2;
      text-align: center;
      background-color: #e1e7e0;
      padding: 20px;
      margin-right: 50px;
      border-radius: 25px;
    }
  }

  .line-divider {
    border-bottom: 2px solid #333;
    margin: 40px;
  }

  .contact-section {
    text-align: center;
    margin-top: 20px;

    .contact-info {
      font-family: "Anuphan";
      margin-top: 10px;
      
    }
  }
`;