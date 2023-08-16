import React, { useState } from "react";
import Search from "./feature/SubComponent/Search";
import Input from "./feature/SubComponent/Input";
import Text from "./feature/SubComponent/Text";

import cross from "./pics/Icon/cross-circle.png";
import cross1 from "./pics/Icon/cross-circle (1).png";

import "./App.css";
import ButtonIcon from "./feature/SubComponent/ButtonIcon";
import OptionMain from "./feature/OptionMain";
import Report from "./feature/Report";
import PhotoSlide from "./feature/PhotoSlide";
import RegisterReader from "./feature/RegisterReader";
import NovelMain from "./feature/NovelMain";
import RegisterArthor from "./feature/RegisterAuthor";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //Report
  const [isReportOpen, setIsReportOpen] = useState(false);
  const handleReportButtonClick = () => {
    setIsReportOpen(!isReportOpen);
  };

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const handleRegisterButtonClick = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleRegisterArButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const editIcon = require("./pics/Icon/edit.png")

  const imageslide = [
    "pics/imgSlide/photoslide1.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOA0CrgQ3eGYvBvQTW9Qad3T8kR-8e2A1S2FGo_eTblluNq8PT62g4Ij5YwSuA98VmNk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtBiLGUzd2KZeyWLkmY9fYJD8iIHwy9ZRkwqtGmFFrhX6XZNhmIVXaCibCcVdsKuJcrc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFdYghoN17eaN_SnZ1UiozwJKasfEpmCrVrBeLNWw3dhShfFVeAnmm72caVtpJQHIaRQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VVTVl-kTz0iZ7x8AO-nx-UuHvcQPdk70FET3SnSeABqC-HONLYCvFQjqRkoM7C3mkBU&usqp=CAU",
    "https://chytomo.com/wp-content/uploads/2022/12/creative-composition-for-world-book-day.jpg",
  ];

  return (
    <div className="App">
      <Search
        value={searchValue}
        onChange={handleSearchChange}
        size={"small"}
      />
      <Input
        type="text"
        placeholder="Enter something..."
        value={inputValue}
        onChange={handleInputChange}
        size={"small"}
      />
      <Text size={18}>test</Text>

      <ButtonIcon
        defaultImg={cross}
        hoveredImg={cross1}
        url={"./feature/Home.js"}
        text={"cancle"}
        className="icon-button"
      />
      <div className="photoslide-container">
        <PhotoSlide images={imageslide} />
        <PhotoSlide images={imageslide} />
        <PhotoSlide images={imageslide} />
      </div>

      <OptionMain />

      <div className="report">
        <button onClick={handleReportButtonClick}>
          <img src={editIcon} alt=" " />
        </button>
      </div>

      {isReportOpen && <Report isOpen={true} />}

      <div className="Register-Reader">
        <p onClick={handleRegisterButtonClick}>Register test</p>
      </div>

      {isRegisterOpen && <RegisterReader x={true} />}

      <NovelMain></NovelMain>
      
      {/* Test Rigister Arthor */}
      {isOpen && <RegisterArthor click={true} />}
      <button onClick={handleRegisterArButtonClick}>
        <img src="/pics/edit.png" alt=" " />
      </button>
    </div>
  );
}

export default App;
