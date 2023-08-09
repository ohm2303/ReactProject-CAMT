
import React, { useState } from 'react';
import Search from './feature/sideComponent/Search'; 
import Input from './feature/sideComponent/Input'; 
import './App.css';
function App() {
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');

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
          size="200px"
      />
      <Input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleInputChange}
          size="200px" 
      />
    </div>
  );
}

export default App;
