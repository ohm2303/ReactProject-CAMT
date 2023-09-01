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
        <Route path="/addBook" element={<AddBook></AddBook>}></Route>
        <Route path="/bankAccount" element={<BankAccountPage></BankAccountPage>}></Route>
        <Route path="/basket" element={<Basket></Basket>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="/pay" element={<Pay></Pay>}></Route>
        <Route path="/payPage" element={<PayPage></PayPage>}></Route>
        <Route path="/payPage" element={<PayPage></PayPage>}></Route>

        <Route path="/RegisterReader" element={<RegisterReader isOpen={true}></RegisterReader>}></Route>
        <Route path="/Login" element={<Login isOpen={true}></Login>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
