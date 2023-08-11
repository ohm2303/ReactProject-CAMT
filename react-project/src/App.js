import React, { useState } from "react";

import Search from "./feature/sideComponent/Search";
import Input from "./feature/sideComponent/Input";
import Text from "./feature/sideComponent/Text";
import cross from "./Icon/cross-circle.png"
import cross1 from "./Icon/cross-circle (1).png"

import "./App.css";
import ButtonIcon from "./feature/sideComponent/ButtonIcon";
import OptionMain from "./feature/OptionMain";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
        title={"cancle"}
        className = "icon-button"
      />

      <OptionMain />
    </div>
  );
}

export default App;
