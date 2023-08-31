import React,{useState} from "react";
import "./App.css";
import BankAccountPage from "./feature/Page/BankAccountPage"; // Adjust the path if needed
import PaymentPage from "./feature/Page/payment";
import PayPage from "./feature/Page/pay";
import RegisterReader from "./feature/Component/RegisterReader";
import Home from "./feature/Page/Home";
import useFetch from "./feature/Hook/useFetch";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handlePrefixChange = (dataArray) => {
    setSearchResults(dataArray);
  };

  const Api_Novel = "/novels";
  const { data } = useFetch(Api_Novel);

  return (
    <>
      <Home handlePrefixChange = {handlePrefixChange} data={data} searchResults={searchResults}></Home>
    </>
  );
};

export default App;
