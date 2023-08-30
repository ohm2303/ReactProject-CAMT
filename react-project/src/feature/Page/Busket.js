import React from "react";
import Text from "../SubComponent/Text";
import Navbar from "../Component/Navbar";
import SelectForPay from "../SubComponent/SelectForPay";
 const Busket =() =>{
  return   (
    <div className="busketPage">
      <div className="busketTitle">
      <Navbar/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap" rel="stylesheet"></link>
    <div style={{lineHeight: "1px"}}>
    <Text size={45} family={'Doknatle'} children={"The book-buster"} weight={"600"}/>
    </div>
    <h1 className="textB">ตะกร้า</h1>
    <h1 className="textS">โปรดเลือกหนังสือที่ต้องการชำระเงิน</h1>
    <hr className="style2"/>
    </div>
    <div className="busketselect">
    <SelectForPay/>
    </div>
    </div>
  );
}

export default Busket;


//GlobalStyle