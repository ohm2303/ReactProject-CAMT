

import React, { useState } from "react";
import "./App.css";
import ButtonIcon from "./feature/SubComponent/ButtonIcon";
import OptionMain from "./feature/OptionMain";
import Report from "./feature/Report";
import PhotoSlide from "./feature/PhotoSlide";
import RegisterReader from "./feature/RegisterReader"; // Import RegisterReader component
import NovelMain from "./feature/NovelMain";
import RegisterAuthor from "./feature/RegisterAuthor"; // Fix typo in component name
import SelectForPay from "./feature/SubComponent/SelectForPay";
import Login from "../src/feature/Login";
import AddBook from "../src/feature/AddBook";
import BankAccountPage from "../src/feature/BankAccountPage";
import payment from "./feature/Page/payment";

//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   //Report
//   const [isReportOpen, setIsReportOpen] = useState(false);
//   const handleReportButtonClick = () => {
//     setIsReportOpen(!isReportOpen);
//   };

//   const [isRegisterOpen, setIsRegisterOpen] = useState(false);
//   const handleRegisterButtonClick = () => {
//     setIsRegisterOpen(!isRegisterOpen);
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const handleRegisterArButtonClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const editIcon = require("./pics/Icon/edit.png")

  const editIcon = require("./pics/Icon/edit.png")

//   return (
//   <>
//   <SelectForPay></SelectForPay>
//   </>

  return (
  <>
  <payment></payment>
  </>

  );


export default App;
