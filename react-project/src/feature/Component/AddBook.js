import Text from "../SubComponent/Text";
import {styled} from "styled-components";
import Input from "../SubComponent/Input";
import GrayBackground from "../SubComponent/GrayBackground";
import UploadFile from "../SubComponent/UploadFile";
import Button from "../SubComponent/Button";
import React, { useState, useEffect } from 'react'

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
  fetch(('http://localhost:3001/api/user/III'),{    
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
        <div className={className}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap" rel="stylesheet"></link>
            <br/>
        <div style={{lineHeight: "0px"}}>    
        <Text size={60} family={'Anuphan'} children={"เพิ่มหนังสือ"} weight={"600"} />
        <hr className="style1"/>
        </div>

        <GrayBackground>
        <form id="add-form" onSubmit={onSubmit}>
        <div style={{lineHeight: "5px"}}>
        <p className="text0">กรุณากรอกข้อมูล</p>
        </div>

        <div className="input-Big-group">

        <div className=" input-group0">
            <label htmlFor="type"className="text1">ประเภท E-Book</label>
            <Input type="text" placeholder="Enter something..."size={"small"} name="type" id="type" 
            value={type} onChange={(event)=>setType(event.target.value)} />
        </div>

        <div className=" input-group1">
            <label htmlFor="cate"className="text1">หมวดหมู่</label>
            <Input type="cate" placeholder="Enter something..."size={"small"} name="type" id="type" 
            value={cate} onChange={(event)=>setCate(event.target.value)} />
        </div>

        </div>


          <div className="input-group2">
            <label htmlFor="name"className="text1">ชื่อหนังสือ</label>
            <Input name="name" type="text" id="name" placeholder="Enter something..."size={"90%"} 
            value={name} onChange={(event)=>setName(event.target.value)} />
          </div>

          <div className=" input-group2">
            <label htmlFor="price" className="text1">ราคา</label>
            <Input name="price" type="text" id="price" placeholder="Enter something..."size={"90%"} 
            value={price} 
            onChange={(event)=>setPrice(event.target.value)} />
          </div>
          <br/>

          <div className="input-Big-group1">
          <div className=" input-group2">
            <label htmlFor="imageURL" className="text1">รูปหน้าปก</label>
            <UploadFile value={imageURL} onChange={(event)=>setImageURL(event.target.value)}/>
          </div>

          <div className=" input-group3">
            <label htmlFor="exam" className="text1">อัพตัวอย่างหนังสือ</label>
            <UploadFile value={imageURL} onChange={(event)=>setExam(event.target.value)} />
          </div>
          </div>
          <br/>
          <div className=" input-group5">    
          <div className=" input-group4">
            <label htmlFor="file" className="text2">อัพหนังสือฉบับเต็ม</label>
            <UploadFile className="UploadFileCSS1"value={imageURL} onChange={(event)=>setFile(event.target.value)}/>
          </div>
          </div>
          <br/>
          <Button type="submit" value="Add&nbsp;book" className="ButtonADD"></Button>
          
        </form>
        </GrayBackground> 
        </div>
          
      ); 

    }
export default AddBook;