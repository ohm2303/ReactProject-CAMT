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

const ContentTitle = styled(Text)`
  font-size: 20px;
`;

const ContentNote = styled(Text)`
  color: gray;
  font-size: 12px;
`;

const ContactSection = styled.div`
  text-align: center;
`;

const ContactInfo = styled(Text)`
  font-size: 12px;
`;

const PaymentPage = () => {
  return (
    <div>
      <Navbar />
      <PaymentPageContainer>
        <Text size={30} weight="bold">
          The book-buster
        </Text>
        <PaymentTitle size={25} weight="bold">
          รายละเอียดหลังการชำระเงิน
        </PaymentTitle>
        <LineDivider />

        <ContentBox>
          <div style={{ flex: 1 }}>
            <QRImage src={QR} alt="QR" />
          </div>
          <ContentContainer>
            <ContentTitle size={20}>
              รายการ e-book ที่คุณจะได้รับหลังการชำระเงิน
            </ContentTitle>
            <ContentNote>
              เมื่อชำระเงินสำเร็จ e-book จะถูกส่งไปยังชั้นหนังสือบนแอพพลิเคชัน the book- buster ภายใน 5 นาที
            </ContentNote>
            <ul>
              {/*ใส่หนังสือที่จะซื้อ*/}
            </ul>
          </ContentContainer>
        </ContentBox>

        <ContactSection>
          <ContactInfo size={20}>หากไม่ได้รับ e-book หรือมีข้อสงสัยใดๆ กรุณาติดต่อสอบถามเราได้ ที่นี่</ContactInfo>
          <ContactInfo size={12}>โทร: 02-962-1698 (จันทร์-ศุกร์ 09.30-19.30 น. ยกเว้นวันหยุดราชการ)</ContactInfo>
          <ContactInfo size={12}>มือถือ: 084-090-3148 (ทุกวัน 09.30-19.30 น.)</ContactInfo>
          <ContactInfo size={12}>E-mail: support@the_book-buster.com (ทุกวัน 24 ชั่วโมง)</ContactInfo>
        </ContactSection>
      </PaymentPageContainer>
    </div>
  );
};

export default PaymentPage;
