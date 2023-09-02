import React,{useState} from "react";
import "./App.css";
import BankAccountPage from "./feature/Page/BankAccountPage"; // Adjust the path if needed
import Payment from "./feature/Page/payment";
import PayPage from "./feature/Page/pay";
import RegisterReader from "./feature/Component/RegisterReader";
import Home from "./feature/Page/Home";
import useFetch from "./feature/Hook/useFetch";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Novel from "./feature/Page/Novel";
import Navbar from "./feature/Component/Navbar";
import MyCollection from "./feature/Page/MyCollection"
import AddBook from "./feature/Component/AddBook"
import Basket from "./feature/Page/Basket"
import Pay from "./feature/Page/pay";
import Login from "./feature/Component/Login"

import Dropdownmenuu from "./feature/SubComponent/Dropdownmenuu";
import GlobalStyle from "./feature/GlobalStyle";
const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handlePrefixChange = (dataArray) => {
    setSearchResults(dataArray);
  };

  const Api_Novel = "/novels";
  const { data } = useFetch(Api_Novel);

  return (
    <>
    <GlobalStyle/>
    <MyCollection/>
    </>
  );
};

export default App;
