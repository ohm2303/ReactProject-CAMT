import React,{useState} from "react";
import "./App.css";
import BankAccountPage from "./feature/Page/BankAccountPage"; // Adjust the path if needed
import PaymentPage from "./feature/Page/payment";
import PayPage from "./feature/Page/pay";
import RegisterReader from "./feature/Component/RegisterReader";
import Home from "./feature/Page/Home";
import useFetch from "./feature/Hook/useFetch";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Novel from "./feature/Page/Novel";
import Navbar from "./feature/Component/Navbar";
import MyCollection from "./feature/Page/MyCollection"

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handlePrefixChange = (dataArray) => {
    setSearchResults(dataArray);
  };

  const Api_Novel = "/novels";
  const { data } = useFetch(Api_Novel);

  return (
    <>
      <BrowserRouter>
      <Navbar onSearchResults={handlePrefixChange}></Navbar>
      <Routes>
        <Route path="/home" element={<Home handlePrefixChange = {handlePrefixChange} data={data} searchResults={searchResults} />}/>
        <Route path="/novel/:id" element={<Novel handlePrefixChange={handlePrefixChange}/>}/>
        <Route path="/myCollection" element={<MyCollection />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
