import React from "react";
import styled from "styled-components"; // Import styled-components library
import Navbar from "../Component/Navbar"; // Replace with actual path
import Text from "../SubComponent/Text";


const PayPage = ({ className }) => {
  return (
    <div className={className}>
      <Navbar />
<<<<<<< HEAD
      <Container>
        <Text size={50} family={"Doknatal"} weight="500">
          The book-buster
        </Text>
        <PageTitle>
          <Text size={30} family={"Anuphan"} weight="500">
            ชำระเงิน
          </Text>
        </PageTitle>
=======
      <div className="container">
        <Text size={40} weight="bold" family={'Anuphan'}>
          The book-buster
        </Text>
        <Text className="page-title" size={25} weight="bold" >
          ชำระเงิน
        </Text>
>>>>>>> 7b423f5a35a5fe947f9343bf4d61092b8327d862

        <div className="line-divider" />

<<<<<<< HEAD
        <ContentBoxTop>
          <Text size={25} family={"Anuphan"} weight="600">
            สรุปรายการที่สั่งซื้อ 4 รายการ
          </Text>
          <Text size={18} family={"Anuphan"} weight="500">
            <ol>{/*ใส่หนังสือที่จะซื้อ*/}ไดโนซอร์รัก ฿303</ol>
            <ol>{/*ใส่หนังสือที่จะซื้อ*/}ไดโนซอร์รัก ฿303</ol>
          </Text>
          <EditButton>
            <Text size={18} family={"Anuphan"} weight="600">
              กลับไปแก้ไขรายการสั่งซื้อ
            </Text>
          </EditButton>
        </ContentBoxTop>

        <ContentBoxBottom>
          <SummaryItem size={20} family={"Anuphan"} weight="600">
            <Text size={20} weight="bold">
              ยอดชำระ $ 399
            </Text>
          </SummaryItem>
          <PayButton>
            <Text size={18} family={"Anuphan"} weight="600">
              ชำระเงิน
            </Text>
          </PayButton>
        </ContentBoxBottom>

        <Text size={16} weight="500" color="gray">
=======
        <div className="content-box-top">
          <div className="text-box">
            <Text size={18} weight="bold" family={'Anuphan'}  >
              สรุปรายการที่สั่งซื้อ 4 รายการ
            </Text>
            <Text size ={15} family={'Anuphan'}>
              <ol>{/*ใส่หนังสือที่จะซื้อ*/}ไดโนซอร์รัก                                        ฿303</ol>
              <ol>{/*ใส่หนังสือที่จะซื้อ*/}ไดโนซอร์รัก                                        ฿303</ol>
            </Text>
            <button className="edit-button">กลับไปแก้ไขรายการสั่งซื้อ</button>
          </div>
        </div>

        <div className="content-box-bottom">
          <Text className="summary-item" size={18} weight="bold" family={'Anuphan'}>
            ยอดชำระ $ 399
          </Text>
          <button className="pay-button">ชำระเงิน</button>
        </div>

        <Text size={15} color="gray" family={'Anuphan'}>
>>>>>>> 7b423f5a35a5fe947f9343bf4d61092b8327d862
          หลังจากที่ท่านชำระเงินเรียบร้อยแล้ว ระบบของ the book-buster.com
          จะใช้เวลาสื่อสารกับตัวกลางชำระเงินประมาณ 10-30 นาที และจะจัดส่ง e-book
          เข้าไปที่ shelf ของท่านโดยไว
        </Text>
      </div>
    </div>
  );
};

export default styled(PayPage)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  text-align: center;
  margin-top: 20px;
  
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
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 40px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }

  .edit-button {
    margin-top: 30px;
    color: #000;
    padding: 8px 16px;
    font-size: 14px;
  }

  .line-divider {
    border-bottom: 2px solid #333;
    margin: 40px;
  }
`;

