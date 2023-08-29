import React from "react";
import styled from "styled-components"; // Import styled-components
import Text from "../SubComponent/Text";
import Navbar from "../Component/Navbar";
import QR from "../../pics/payment/Picture1.png";

// Define styled components
const PaymentPageContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PaymentTitle = styled(Text)`
  margin-top: 10px;
`;

const LineDivider = styled.div`
  border-bottom: 2px solid #333;
  margin: 40px;
`;

const ContentBox = styled.div`
  display: flex;
  margin-top: 30px;
`;

const QRImage = styled.img`
  max-width: 60%;
  height: auto;
`;

const ContentContainer = styled.div`
  flex: 2;
  text-align: center;
  background-color: #e1e7e0;
  padding: 20px;
  margin-right: 50px;
  border-radius: 25px;
`;

const ContentTitle = styled(Text)``;

const ContentNote = styled(Text)``;

const ContactSection = styled.div`
  text-align: center;
`;

const ContactInfo = styled(Text)``;

const PaymentPage = () => {
  return (
    <div>
      <Navbar />
      <PaymentPageContainer>
        <Text size={50} family={"Doknatal"} weight="500">
          The book-buster
        </Text>
        <PaymentTitle>
          <Text size={30} family={"Anuphan"} weight="500">
            รายละเอียดหลังการชำระเงิน
          </Text>
        </PaymentTitle>
        <LineDivider />

        <ContentBox>
          <div style={{ flex: 1 }}>
            <QRImage src={QR} alt="QR" />
          </div>
          <ContentContainer>
            <ContentTitle>
              <Text size={25} family={"Anuphan"} weight="600">
                รายละเอียดหลังการชำระเงิน
              </Text>
            </ContentTitle>
            <ContentNote color="gray" size={15}>
              เมื่อชำระเงินสำเร็จ e-book จะถูกส่งไปยังชั้นหนังสือบนแอพพลิเคชัน
              the book- buster ภายใน 5 นาที
            </ContentNote>
            <Text size={18} family={"Anuphan"} weight="500">
              <ol>{/*ใส่หนังสือที่จะซื้อ*/}uuiiiii</ol>
              <ol>{/*ใส่หนังสือที่จะซื้อ*/}uuiiiii</ol>
            </Text>
          </ContentContainer>
        </ContentBox>

        <ContactSection>
          <Text family={"Anuphan"} weight="400">
            <ContactInfo size={18} weight="600">
              หากไม่ได้รับ e-book หรือมีข้อสงสัยใดๆ กรุณาติดต่อสอบถามเราได้
              ที่นี่
            </ContactInfo>
            <ContactInfo size={14}>
              โทร: 02-962-1698 (จันทร์-ศุกร์ 09.30-19.30 น. ยกเว้นวันหยุดราชการ)
            </ContactInfo>
            <ContactInfo size={14}>
              มือถือ: 084-090-3148 (ทุกวัน 09.30-19.30 น.)
            </ContactInfo>
            <ContactInfo size={14}>
              E-mail: support@the_book-buster.com (ทุกวัน 24 ชั่วโมง)
            </ContactInfo>
          </Text>
        </ContactSection>
      </PaymentPageContainer>
    </div>
  );
};

export default PaymentPage;
