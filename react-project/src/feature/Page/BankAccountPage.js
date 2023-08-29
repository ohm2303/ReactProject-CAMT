import React from "react";
import styled from "styled-components"; // Import styled-components library
import Text from "../SubComponent/Text";
import Input from "../SubComponent/Input"; // Import the Input component
import Navbar from "../Component/Navbar";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f7f14726b565df761c9b47351c0bd417444a0e24
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
<<<<<<< HEAD
=======
const BankAccountPage = ({ className }) => {
>>>>>>> 7b423f5a35a5fe947f9343bf4d61092b8327d862
=======
>>>>>>> f7f14726b565df761c9b47351c0bd417444a0e24
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f7f14726b565df761c9b47351c0bd417444a0e24
      <Container>
        <Text size={50} family={"Doknatal"} weight="500">
          The book-buster
        </Text>
        <PageTitle>
          <Text size={30} family={"Anuphan"} weight="500">
            ชำระเงิน
          </Text>
        </PageTitle>
<<<<<<< HEAD
=======
        <Text size={40} weight="bold" family={'Anuphan'}>
          The book-buster
        </Text>
        <Text className="page-title" size={25} weight="bold" family={'Anuphan'}>
          ชำระเงิน
        </Text>
>>>>>>> 7b423f5a35a5fe947f9343bf4d61092b8327d862
=======
>>>>>>> f7f14726b565df761c9b47351c0bd417444a0e24

        <LineDivider />

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f7f14726b565df761c9b47351c0bd417444a0e24
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
<<<<<<< HEAD
=======
        <div className="form-container">
          
          <div className="form-field">
            <Text size={18} weight="bold" family={'Anuphan'}>
              E-mail ของคุณ *
            </Text>
            <Input
              className="form-input"
              type="text"
              placeholder="กรอกอีเมลของคุณ"
              size ="450px"
            />
            <p className="form-note">
              ระบบจะส่งข้อมูลการโอนเงินไปให้ที่อีเมลนี้ หากอีเมลไม่ถูกต้อง โปรดแก้ไข
            </p>
          </div>
          
          <div className="form-field">
            <Text size={18} weight="bold" family={'Anuphan'}>
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
            <Text size={18} weight="bold" family={'Anuphan'}>
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
            <Text size={12} color="red"  family={'Anuphan'}>
              กรุณาชำระเงินภายในวันที่ 08 ส.ค. 2566 เวลา 23:10 น.
            </Text>
            <button className="pay-button">ชำระเงิน</button>
          </div>
        </div>
      
      
>>>>>>> 7b423f5a35a5fe947f9343bf4d61092b8327d862
=======
>>>>>>> f7f14726b565df761c9b47351c0bd417444a0e24
    </div>
  );
};

export default BankAccountPage;
