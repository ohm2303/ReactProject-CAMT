import React from "react";
import styled from "styled-components"; // Import styled-components library
import Text from "../SubComponent/Text";
import Input from "../SubComponent/Input"; // Import the Input component
import Navbar from "../Component/Navbar";

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PageTitle = styled(Text)`
  margin-top: 10px;
`;

const LongLine = styled.div`
  border-bottom: 2px solid #333;
  margin: 20px auto;
`;

const FormContainer = styled.div`
  margin: 20px auto;
  width: 70%;
  background-color: #e1e7e0;
  padding: 20px;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const FormInput = styled(Input)`
  width: 50%;
  font-size: 16px;
  padding: 10px;
`;

const FormNote = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 5px;
`;

const DeadlineContainer = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const DeadlineText = styled(Text)`
  color: gray;
`;

const PayButton = styled.button`
  font-size: 14px;
  background-color: gray;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const BankAccountPage = () => {
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

        <FormContainer>
          <FormField>
            <Text size={18} weight="bold">
              E-mail ของคุณ *
            </Text>
            <FormInput
              type="text"
              placeholder="กรอกอีเมลของคุณ"
            />
            <FormNote>
              ระบบจะส่งข้อมูลการโอนเงินไปให้ที่อีเมลนี้ หากอีเมลไม่ถูกต้อง โปรดแก้ไข
            </FormNote>
          </FormField>
          <FormField>
            <Text size={18} weight="bold">
              เบอร์โทร *
            </Text>
            <FormInput
              type="text"
              placeholder="กรอกเบอร์โทรของคุณ"
            />
            <FormNote>
              หากเกิดความขัดข้อง เราจะติดต่อไปที่เบอร์โทรนี้
            </FormNote>
          </FormField>
          <FormField>
            <Text size={18} weight="bold">
              ชื่อ-นามสกุล
            </Text>
            <FormInput
              type="text"
              placeholder="กรอกชื่อ-นามสกุลของคุณ"
            />
            <FormNote>
              สามารถเว้นว่างได้หากไม่ต้องการระบุ
            </FormNote>
          </FormField>
          <DeadlineContainer>
            <DeadlineText size={12}>
              กรุณาชำระเงินภายในวันที่ 08 ส.ค. 2566 เวลา 23:10 น.
            </DeadlineText>
            <PayButton>ชำระเงิน</PayButton>
          </DeadlineContainer>
        </FormContainer>
      </Container>
    </div>
  );
};

export default BankAccountPage;
