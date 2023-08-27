import React from "react";
import Text from "../SubComponent/Text";
import Input from "../SubComponent/Input"; // Import the Input component
import Navbar from "../Component/Navbar";

const BankAccountPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Text size={30} weight="bold">
          The book-buster
        </Text>
        <Text size={25} weight="bold" style={{ marginTop: "10px" }}>
        ชำระเงิน
        </Text>
        <div
          style={{
            margin: "20px auto",
            width: "70%",
            backgroundColor: "#E1E7E0",
            padding: "20px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <Text size={18} weight="bold">
              E-mail ของคุณ *
            </Text>
            <Input
              type="text"
              placeholder="กรอกอีเมลของคุณ"
              width="50%" // Full-width input
              fontSize="16px"
              padding="10px"
            />
            <p style={{ fontSize: "12px", color: "gray", marginTop: "5px" }}>
              ระบบจะส่งข้อมูลการโอนเงินไปให้ที่อีเมลนี้ หากอีเมลไม่ถูกต้อง โปรดแก้ไข
            </p>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Text size={18} weight="bold">
              เบอร์โทร *
            </Text>
            <Input
              type="text"
              placeholder="กรอกเบอร์โทรของคุณ"
              width="50%" // Full-width input
              fontSize="16px"
              padding="10px"
            />
            <p style={{ fontSize: "12px", color: "gray", marginTop: "5px" }}>
              หากเกิดความขัดข้อง เราจะติดต่อไปที่เบอร์โทรนี้
            </p>
          </div>
          <div>
            <Text size={18} weight="bold">
              ชื่อ-นามสกุล
            </Text>
            <Input
              type="text"
              placeholder="กรอกชื่อ-นามสกุลของคุณ"
              width="50%" // Input with 50% width
              fontSize="16px"
              padding="10px"
            />
            <p style={{ fontSize: "12px", color: "gray", marginTop: "5px" }}>
              สามารถเว้นว่างได้หากไม่ต้องการระบุ
            </p>
          </div>
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <Text size={12} color="gray">
              กรุณาชำระเงินภายในวันที่ 08 ส.ค. 2566 เวลา 23:10 น.
            </Text>
            <button
              style={{
                fontSize: "14px",
                backgroundColor: "gray",
                color: "white",
                border: "none",
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountPage;
