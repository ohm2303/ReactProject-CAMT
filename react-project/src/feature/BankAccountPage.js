import React from "react";
import Text from "./SubComponent/Text";
import Navbar from "./Navbar"; // Assuming you have a Navbar component

const BankAccountPage = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Text size={30} weight="bold">
          The book-buster
        </Text>
        <Text size={20} weight="bold" style={{ marginTop: "10px" }}>
          โอนเงินเข้าบัญชีธนาคารหรือพร้อมเพย์
        </Text>
        <Text size={18}>
          โอนเงินผ่าน Mobile Banking, Internet Banking, ตู้ ATM หรือเคาน์เตอร์ธนาคารลดพิเศษอีก 3%
          เมื่อยอดโอนเกิน 500 บาท (แสดงยอดเงินที่ลดแล้วในหน้าถัดไป)
        </Text>
        <div style={{ margin: "20px auto", width: "70%", backgroundColor: "#E1E7E0", padding: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <Text size={18} weight="bold">
              E-mail ของคุณ *
            </Text>
            <input
              type="text"
              placeholder="กรอกอีเมลของคุณ"
              style={{ width: "100%" }}
            />
            <p style={{ fontSize: "12px", color: "gray", marginTop: "5px" }}>
              ระบบจะส่งข้อมูลการโอนเงินไปให้ที่อีเมลนี้ หากอีเมลไม่ถูกต้อง โปรดแก้ไข
            </p>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Text size={18} weight="bold">
              เบอร์โทร *
            </Text>
            <input
              type="text"
              placeholder="กรอกเบอร์โทรของคุณ"
              style={{ width: "100%" }}
            />
            <p style={{ fontSize: "12px", color: "gray", marginTop: "5px" }}>
              หากเกิดความขัดข้อง เราจะติดต่อไปที่เบอร์โทรนี้
            </p>
          </div>
          <div>
            <Text size={18} weight="bold">
              ชื่อ-นามสกุล
            </Text>
            <input
              type="text"
              placeholder="กรอกชื่อ-นามสกุลของคุณ"
              style={{ width: "100%" }}
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
