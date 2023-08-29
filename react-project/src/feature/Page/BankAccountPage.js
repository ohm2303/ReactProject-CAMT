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

const LineDivider = styled.div`
  border-bottom: 2px solid #333;
  margin: 40px;
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
  font-size: 13px;
  color: gray;
  margin-top: 5px;
`;

const DeadlineContainer = styled.div`
  text-align: right;
  margin-top: 20px;
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

const BankAccountPage = () => {
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

        <FormContainer>
          <FormField>
            <Text size={20} family={"Anuphan"} weight="600">
              E-mail ของคุณ *
            </Text>
            <FormInput type="text" placeholder="กรอกอีเมลของคุณ" />
            <FormNote>
              ระบบจะส่งข้อมูลการโอนเงินไปให้ที่อีเมลนี้ หากอีเมลไม่ถูกต้อง
              โปรดแก้ไข
            </FormNote>
          </FormField>
          <FormField>
            <Text size={20} family={"Anuphan"} weight="600">
              เบอร์โทร *
            </Text>
            <FormInput type="text" placeholder="กรอกเบอร์โทรของคุณ" />
            <FormNote>หากเกิดความขัดข้อง เราจะติดต่อไปที่เบอร์โทรนี้</FormNote>
          </FormField>
          <FormField>
            <Text size={20} family={"Anuphan"} weight="600">
              ชื่อ-นามสกุล
            </Text>
            <FormInput type="text" placeholder="กรอกชื่อ-นามสกุลของคุณ" />
            <FormNote>สามารถเว้นว่างได้หากไม่ต้องการระบุ</FormNote>
          </FormField>
          <DeadlineContainer>
            <Text size={14} family={"Anuphan"} weight="600" color="red">
              กรุณาชำระเงินภายในวันที่ 08 ส.ค. 2566 เวลา 23:10 น.
            </Text>
            <PayButton>
              <Text size={18} family={"Anuphan"} weight="600">
                ชำระเงิน
              </Text>
            </PayButton>
          </DeadlineContainer>
        </FormContainer>
      </Container>
    </div>
  );
};

export default BankAccountPage;
