import Text from "../SubComponent/Text";
  import {styled} from "styled-components";
  import Input from "../SubComponent/Input";
  import GrayBackground from "../SubComponent/GrayBackground";
  import UploadFile from "../SubComponent/UploadFile";
  import Button from "../SubComponent/Button";
  import React, { useState, useEffect } from 'react'
import Navbar from "./Navbar";
  const StyledAddBook = styled.div`
  .total-content{
  font-family: 'Anuphan', sans-serif;
  text-align: center;
  margin-top: 20px;
}
  .title {
    font-size: 60px;
    font-weight: 600;
    align-items: center;
    margin-bottom: 20px;
  }
  hr.style1 {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, #ccc, #f0f0f0, #ccc);
    margin: 10px 0 30px;
    width: 100%;
  }
  .text0 {
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 0;
  }
  .input-group,
  .file-group {
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
  }
  .text-title {
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .text1{
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
  }
  .text2{
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    magin-bottom: 30px;
    
  }
  .ButtonADD {
    display: flex;
    justify-content: center;
    margin: auto;
    font-size: 15px;
    background-color: black; /* Change background color */
    border-radius: 20px;
    box-sizing: border-box;
    color: white; /* Change text color to black */
    border: none;
    padding: 15px 100px;
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    align-items: center;
    font-family: Anuphan
  }
  
  .ButtonADD:hover {
    color: white; /* Change text color to white */
    background-color: black; /* Change background color to black */
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  .ButtonADD:active {
    box-shadow: none;
    transform: translateY(0);
  }
  
`;
  const AddBook = (className) => {
      const [name,setName] = useState('') 
      const [imageURL,setImageURL] = useState('') 
      const [type,setType] = useState('') 
      const [cate,setCate] = useState('') 
      const [price,setPrice] = useState('') 
      const [exam,setExam] = useState('') 
      const [file,setFile] = useState('') 
      const [data,setData] = useState('')
    useEffect( () => {
  fetch(('/api/user/III'),{    
      method:"POST",
      headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
    pass: "1234",
    user: "preme"
  })                                                   
  })
  .then(response => response.json())
  .then(data=>setData(data))
  },[])
      function onSubmit(event) {
          event.preventDefault();
          AddBook({ name, type, imageURL, price, exam, file});
        }
      return (
      <StyledAddBook>
        <div className={className}>
        <div className="total-content">         <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
              <link href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap" rel="stylesheet"></link>
              <br/>
          <div className="title-contrainer">
            <div style={{lineHeight: "0px"}}>  
            <Text className="title" size={60} family={'Anuphan'} children={"เพิ่มหนังสือ"} weight={"700"} />
           
            </div>
            <form id="add-form" onSubmit={onSubmit}></form>
            <div style={{lineHeight: "15px"}}>
              <Text className="title" size={25} family={'Anuphan'} children={"กรุณากรอกข้อมูล"} weight={"570"} />
            </div>
          </div>
          <hr className="style1"/>
          <div className="input-group">
            <div className=" input-group">
                <label htmlFor="type"className="text1">ประเภท E-Book</label><br/>
                <br/><Input type="text" placeholder="Enter something..."size={"90%"} name="type" id="type" 
                value={type} onChange={(event)=>setType(event.target.value)} />
            </div>
            <div className=" input-group">
                <label htmlFor="cate"className="text1">หมวดหมู่</label><br/>
                <br/><Input type="cate" placeholder="Enter something..."size={"90%"} name="type" id="type" 
                value={cate} onChange={(event)=>setCate(event.target.value)} />
            </div>
              <div className="input-group">
                <label htmlFor="name"className="text1">ชื่อหนังสือ</label><br/>
                <br/><Input name="name" type="text" id="name" placeholder="Enter something..."size={"90%"} 
                value={name} onChange={(event)=>setName(event.target.value)} />
              </div>
              <div className=" input-group">
                <label htmlFor="price" className="text1">ราคา</label><br/>
                <br/>
                <Input name="price" type="text" id="price" placeholder="Enter something..."size={"90%"} 
                value={price} 
                onChange={(event)=>setPrice(event.target.value)} />
              </div>
            </div>
            <div className=" input-group">
              <label htmlFor="imageURL" className="text2">รูปหน้าปก</label><br/>
              <br/><UploadFile value={imageURL} onChange={(event)=>setImageURL(event.target.value)}/>
            </div>
            <div className=" input-group">
              <label htmlFor="exam" className="text2">อัพตัวอย่างหนังสือ</label><br/>
              <br/><UploadFile value={imageURL} onChange={(event)=>setImageURL(event.target.value)} />
            </div>
            
   
            <div className=" input-group">
              <label htmlFor="file" className="text2">อัพหนังสือฉบับเต็ม</label><br/>
              <br/><UploadFile value={imageURL} onChange={(event)=>setImageURL(event.target.value)}/>
            </div>
            </div>
            <Button type="submit" value="Add&nbsp;book" className="ButtonADD"></Button>
            </div>
            
          </StyledAddBook>
          
            
        ); 
      }
  export default AddBook;