import React from "react";
import Text  from "../SubComponent/Text";
import Navbar from "../../feature/Navbar"; 

const NextBankAccountPage = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Text size={30} weight="bold">
          The book-buster
        </Text>
        <Text size={20} weight="bold" style={{ marginTop: "10px" }}>
          รายละเอียดหลังการชำระเงิน
        </Text>
        {/* Text and image section */}
        <div className="details-section">
          <div className="image-container">
            {/* Place your image here */}
            {/* <img src="your-image-url" alt="E-Books" /> */}
          </div>
          <div className="text-container">
            <Text size={18}>
              รายการ e-book ที่คุณจะได้รับหลังการชำระเงิน
            </Text>
            <ol>
              <li>ไดโนซอร์รัก</li>
              <li>เมียมิโปรด</li>
              <li>รักเหนือลิขิต</li>
            </ol>
            <Text size={18}>
              เมื่อชำระเงินสำเร็จ e-book จะถูกส่งไปยังชั้นหนังสือบนแอพพลิเคชั่น the book- buster
              ภายใน 5 นาที
            </Text>
          </div>
        </div>
        {/* Contact section */}
        <div className="contact-section">
          <Text size={20} weight="bold" style={{ marginBottom: "10px" }}>
            หากไม่ได้รับ e-book หรือมีข้อสงสัยใดๆ กรุณาติดต่อสอบถามเราได้ ที่นี่
          </Text>
          <Text size={18}>โทร: 02-962-1698 (จันทร์-ศุกร์ 09.30-19.30 น. ยกเว้นวันหยุดราชการ)</Text>
          <Text size={18}>มือถือ: 084-090-3148 (ทุกวัน 09.30-19.30 น.)</Text>
          <Text size={18}>E-mail: support@the_book-buster.com (ทุกวัน 24 ชั่วโมง)</Text>
        </div>
      </div>
    </div>
  );
};

export default NextBankAccountPage;
