import React from "react";
import styled from "styled-components"; // Import styled-components library
import Navbar from "../Component/Navbar"; // Replace with actual path
import Text from "../SubComponent/Text"; 
// Replace with actual path

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PageTitle = styled(Text)`
  margin-top: 10px;
`;

const LongLine = styled.div`
  border-bottom: 2px solid #333;
  margin: 30px auto;
  max-width: 1300px;
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
  color: #fff;
  font-size: ${props => props.size || 15}px;
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
        <Text size={30} weight="bold">
          The book-buster
        </Text>
        <PageTitle size={25} weight="bold">
          ชำระเงิน
        </PageTitle>

        <LongLine />

        <ContentBoxTop>
          <SummaryItem size={18}>
            สรุปรายการที่สั่งซื้อ 4 รายการ
          </SummaryItem>
          <SummaryItem >
            <ol>ไดโนซอร์รัก                                        ฿303</ol>
            <ol>ไดโนซอร์รัก                                        ฿303</ol>
          </SummaryItem>
          {/* Add more summary items here */}
        </ContentBoxTop>

        <EditButton>กลับไปแก้ไขรายการสั่งซื้อ</EditButton>
        

        <ContentBoxBottom>
          <SummaryItem size={18} weight="bold">
            ยอดชำระ $ 399
          </SummaryItem>
          <PayButton>ชำระเงิน</PayButton>
        </ContentBoxBottom>

        <Text size={15} style={{ marginTop: "20px" }}>
          หลังจากที่ท่านชำระเงินเรียบร้อยแล้ว ระบบของ the book-buster.com
          จะใช้เวลาสื่อสารกับตัวกลางชำระเงินประมาณ 10-30 นาที และจะจัดส่ง e-book
          เข้าไปที่ shelf ของท่านโดยไว
        </Text>
      </Container>
    </div>
  );
};

export default PayPage;
