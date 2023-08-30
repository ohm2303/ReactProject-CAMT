import React from "react";
import Text from "../SubComponent/Text";
import Navbar from "../Component/Navbar";
import SelectForPay from "../SubComponent/SelectForPay";
import styled from "styled-components";

const Busket = ({ className }) => {
  return (
    <div className={className}>
      <div className="busketPage">
        <Navbar />
        <Text className="page-title" size={40} weight="bold" family={"Anuphan"}>
          The book-buster
        </Text>
        <Text className="page-title" size={30} weight="bold" family={"Anuphan"}>
          ตะกร้า
        </Text>
        <Text className="page-title-next" size={25}  family={"Anuphan"}>
          โปรดเลือกหนังสือที่ต้องการชำระเงิน
        </Text>
        <div className="line-divider" />

        <div className="busketselect">
          <SelectForPay />
        </div>
      </div>
    </div>
  );
};

export default styled(Busket)`
  .busketPage {
    text-align: center;
  }

  .page-title {
    margin-top: 20px;
  }

  .line-divider {
    border-bottom: 2px solid #333;
    margin: 40px;
  }
`;
