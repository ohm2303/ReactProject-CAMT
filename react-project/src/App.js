import React, { useState } from 'react';
import Search from './feature/sideComponent/Search'; 
import Input from './feature/sideComponent/Input';
import Text from './feature/SideComponent/Text'; 
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
      <Text size={18}>test</Text>
    </div>
  );
}

export default App;
