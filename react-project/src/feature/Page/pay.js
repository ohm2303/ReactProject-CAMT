import React from "react";
import styled from "styled-components"; // Import styled-components library
import Navbar from "../Component/Navbar"; // Replace with actual path
import Text from "../SubComponent/Text";

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PageTitle = styled(Text)`
  margin-top: 10px;
`;

const LineDivider = styled.div`
  border-bottom: 2px solid #333;
  margin: 40px;
`;

const ContentBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e1e7e0;
  border-radius: 25px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const SummaryItem = styled(Text)`
  margin-top: 5px;
`;

const ContentBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 20px;
  padding: 20px;
`;

const PayButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const EditButton = styled.button`
  margin-top: 30px;
  color: #000;
  padding: 8px 16px;
  font-size: 14px;
`;

const PayPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Text size={50} family={"Doknatal"} weight="500">
          The book-buster
        </Text>
        <PageTitle>
          <Text size={30} family={"Anuphan"} weight="500">
            ชำระเงิน
          </Text>
        </PageTitle>

        <LineDivider />

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
          หลังจากที่ท่านชำระเงินเรียบร้อยแล้ว ระบบของ the book-buster.com
          จะใช้เวลาสื่อสารกับตัวกลางชำระเงินประมาณ 10-30 นาที และจะจัดส่ง e-book
          เข้าไปที่ shelf ของท่านโดยไว
        </Text>
      </Container>
    </div>
  );
};

export default PayPage;
