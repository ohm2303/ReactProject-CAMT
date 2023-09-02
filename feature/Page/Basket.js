import React from "react";
import Text from "../SubComponent/Text";
import Navbar from "../Component/Navbar";
import SelectForPay from "../SubComponent/SelectForPay";
import { useState,useEffect } from "react";
import Load from "../SubComponent/Load";
 const Busket =() =>{
const [load,setLoad] = useState(true)

  const [content, setContent] = useState([]);
  useEffect( () => {
    fetch((`${process.env.REACT_APP_API_PREME}/api/user/basket/1`),{    
      method:"GET",                                     
  })
  .then(response => response.json())
  .then(data=>{ 
    setContent([])
    data.forEach(element => {
      setContent(old => [...old, <div style={{marginTop: "10px"}}><SelectForPay keys={element.name} props={element} setContent={setContent} /></div>])
    });
    setLoad(false)
  })
  },[])

  return   (
    <>

    {load ? <Load/> : 
   
    <div className="busketPage">
      <div className="busketTitle">
      <Navbar />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap" rel="stylesheet"></link>
    <div style={{lineHeight: "1px"}}>
    <Text size={45} family={'Doknatle'} children={"The book-buster"} weight={"600"}/>
    </div>
    <h1 className="textB">ตะกร้า</h1>
    <h1 className="textS">โปรดเลือกหนังสือที่ต้องการชำระเงิน</h1>
    <hr className="style2"/>
    </div>
    <div className="busketselect">

    {content.length > 0 ? content : <><h1 className="textS">คุณยังไม่ได้เพิ่มหนังสือใส่ในตะกร้า</h1></>}
    </div>
    </div>

    }
    
    </>
  );
}

export default Busket;


//GlobalStyle
//