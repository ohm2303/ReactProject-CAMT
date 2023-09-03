import Text from "../SubComponent/Text";
import { styled } from "styled-components";
import Input from "../SubComponent/Input";
import GrayBackground from "../SubComponent/GrayBackground";
import UploadFile from "../SubComponent/UploadFile";
import Button from "../SubComponent/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const StyledAddBook = styled.div`
  .total-content {
    font-family: "Anuphan", sans-serif;
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
  .text1 {
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
  }
  .text2 {
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
    font-family: Anuphan;
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
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [type, setType] = useState("");
  const [cate, setCate] = useState("");
  const [price, setPrice] = useState("");
  const [exam, setExam] = useState("");
  const [file, setFile] = useState("");
  const [data, setData] = useState("");
  const [promotion,setPromotion] = useState('');
  const [description,setDescription] = useState('');
  const [author,setAuthor] = useState('')

  // function onSubmit(event) {
  //   event.preventDefault();
  //   AddBook({ name, type, imageURL, price, exam, file });
  // }

  const onChangeFile = (event) => {
    const selectedFile = event.target.files[0]; // เลือกไฟล์แรกที่ผู้ใช้เลือก

    if (selectedFile) {
      // ตรวจสอบว่ามีไฟล์ที่เลือกหรือไม่
      console.log("ชื่อไฟล์:", selectedFile.name);
      console.log("ประเภทไฟล์:", selectedFile.type);
      console.log("ขนาดไฟล์ (bytes):", selectedFile.size);

      setFile(selectedFile.name);
    }
  };
  const onChangeImg = (e) => {
    const selectedFile = e.target.files[0]; // เลือกไฟล์แรกที่ผู้ใช้เลือก

    if (selectedFile) {
      // ตรวจสอบว่ามีไฟล์ที่เลือกหรือไม่
      console.log("ชื่อไฟล์:", selectedFile.name);
      console.log("ประเภทไฟล์:", selectedFile.type);
      console.log("ขนาดไฟล์ (bytes):", selectedFile.size);

      setImageURL(selectedFile.name);
    }
  };
  const onChangeExam = (e) => {
    const selectedFile = e.target.files[0]; // เลือกไฟล์แรกที่ผู้ใช้เลือก

    if (selectedFile) {
      // ตรวจสอบว่ามีไฟล์ที่เลือกหรือไม่
      console.log("ชื่อไฟล์:", selectedFile.name);
      console.log("ประเภทไฟล์:", selectedFile.type);
      console.log("ขนาดไฟล์ (bytes):", selectedFile.size);

      setExam(selectedFile.name);
    }
  };
  const onClick = async () => {
    // สร้างฟังก์ชันสำหรับการส่งคำขอ POST
    const postDataToServer = async () => {
      try {
        const url = "/novels"; // แทนที่ด้วย URL ของเซิร์ฟเวอร์ที่คุณต้องการ
        const dataToSend = {
          name: name,
          price: price,
          file_pic: imageURL,
          file_real: file,
          file_test: exam,
          category: type,
          description:description,
          promotion:promotion,
          author:author
        }; // แทนที่ด้วยข้อมูลที่คุณต้องการส่ง

        const response = await axios.post(url, dataToSend);

        // อัปเดตสถานะเพื่อแสดงข้อมูลที่ได้จากเซิร์ฟเวอร์
        setData(response.data);
        console.log("คำขอ POST สำเร็จ:", response.data);
        alert("created success")
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการส่งคำขอ POST:", error);
        alert("arror")
      }
    };

    // เรียกใช้งานฟังก์ชันสำหรับการส่งคำขอ POST เมื่อคอมโพเนนต์ถูกโหลด
    postDataToServer();
  };
  useEffect(() => {
    console.log("ค่า file ถูกอัปเดต:", file, exam, imageURL);
  }, []);

  return (
    <StyledAddBook>
      <div className={className}>
        <div className="total-content">
          {" "}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap"
            rel="stylesheet"
          ></link>
          <br />
          <div className="title-contrainer">
            <div style={{ lineHeight: "0px" }}>
              <Text
                className="title"
                size={60}
                family={"Anuphan"}
                children={"เพิ่มหนังสือ"}
                weight={"700"}
              />
            </div>
            {/* <form id="add-form" onSubmit={onSubmit}></form> */}
            <div style={{ lineHeight: "15px" }}>
              <Text
                className="title"
                size={25}
                family={"Anuphan"}
                children={"กรุณากรอกข้อมูล"}
                weight={"570"}
              />
            </div>
          </div>
          <hr className="style1" />
          <div className="input-group">
            <div className=" input-group">
              <label htmlFor="type" className="text1">
                ประเภท E-Book
              </label>
              <br />
              <br />
              <Input
                type="text"
                placeholder="Enter something..."
                size={"90%"}
                name="type"
                id="type"
                value={type}
                onChange={(event) => setType(event.target.value)}
              />
            </div>
            <div className=" input-group">
              <label htmlFor="cate" className="text1">
                หมวดหมู่
              </label>
              <br />
              <br />
              <Input
                type="cate"
                placeholder="Enter something..."
                size={"90%"}
                name="type"
                id="cate"
                value={cate}
                onChange={(event) => setCate(event.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="name" className="text1">
                ชื่อหนังสือ
              </label>
              <br />
              <br />
              <Input
                name="name"
                type="text"
                id="name"
                placeholder="Enter something..."
                size={"90%"}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="name" className="text1">
                นามปากา
              </label>
              <br />
              <br />
              <Input
                name="name"
                type="text"
                id="author"
                placeholder="Enter something..."
                size={"90%"}
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="name" className="text1">
                โปรโมชั่น
              </label>
              <br />
              <br />
              <Input
                name="name"
                type="text"
                id="promotion"
                placeholder="Enter something..."
                size={"90%"}
                value={promotion}
                onChange={(event) => setPromotion(event.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="name" className="text1">
                คํานํา
              </label>
              <br />
              <br />
              <Input
                name="name"
                type="text"
                id="description"
                placeholder="Enter something..."
                size={"90%"}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div className=" input-group">
              <label htmlFor="price" className="text1">
                ราคา
              </label>
              <br />
              <br />
              <Input
                name="price"
                type="text"
                id="price"
                placeholder="Enter something..."
                size={"90%"}
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div className=" input-group">
              <label htmlFor="price" className="text1">
              รูปหน้าปก
              </label>
              <br />
              <br />
              <Input
                name="price"
                type="text"
                id="price"
                placeholder="Enter something..."
                size={"90%"}
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
              />
            </div>
          </div>
          
          <div className=" input-group">
            <label htmlFor="exam" className="text2">
              อัพตัวอย่างหนังสือ
            </label>
            <br />
            <br />
            <UploadFile
              value={exam}
              onChange={onChangeExam}
              accept="application/pdf"
            />
          </div>
          <div className=" input-group">
            <label htmlFor="file" className="text2">
              อัพหนังสือฉบับเต็ม
            </label>
            <br />
            <br />
            <UploadFile
              id={file}
              onChange={onChangeFile}
              accept="application/pdf"
            />
          </div>
        </div>
        <Button
          type="submit"
          value="Add&nbsp;book"
          className="ButtonADD"
          onClick={onClick}
        ></Button>
      </div>
    </StyledAddBook>
  );
};

AddBook.propType = {
  className: PropTypes.string,
};

export default AddBook;