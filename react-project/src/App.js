import React,{useState,useEffect} from "react";
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
import RegisterAuthor from "./feature/Component/RegisterAuthor"
import Login from "./feature/Component/Login"
import Load from "./feature/SubComponent/Load";
import GlobalStyle from "./feature/GlobalStyle";
import { Provider } from "react-redux";
import store from './store/store'
const userContext = React.createContext();


const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [dataCon, setDataCon] = useState({displayname :"", id:"", email:"",pic:"",level:""})
  const [isLoading, setLoading] = useState(true)

  const handlePrefixChange = (dataArray) => {
    setSearchResults(dataArray);
  };

  const Api_Novel = "/novels";
  const { data } = useFetch(Api_Novel);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PREME}/api/user/checkcookie`,{    
      method:"POST",
      credentials: 'include',
      headers:{
          "Content-Type": "application/json",
      },
      })
      .then(response => response.json())
      .then(data => {
        if(data.status == "Failed") {
          setDataCon({displayname :"", id:"", email:"",pic:""})
          setLoading(false)
          return
        }
      setDataCon({displayname :data[0].display_name, id:data[0].id, email:data[0].email,level:data[0].level})
      setLoading(false)
      })
  },[])
  return (
    <>
    <Provider store={store}>
    <userContext.Provider value={{dataCon,setDataCon}}>
      <GlobalStyle/>
    {isLoading ? <Load/> : 
    <>
      <BrowserRouter>
      <Navbar onSearchResults={handlePrefixChange}></Navbar>
      <Routes>
        <Route path="/" element={<Home handlePrefixChange = {handlePrefixChange} data={data} searchResults={searchResults} />}/>
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
        <Route path="/Rigister" element={<RegisterReader isOpen={true}></RegisterReader>}></Route>
        <Route path="/RegisterAuthor" element={<RegisterAuthor isOpen={true}></RegisterAuthor>}></Route>
        <Route path="/Login" element={<Login isOpen={true}></Login>}></Route>
      </Routes>
      </BrowserRouter>
      </>}
    </userContext.Provider>
    </Provider>
    </>
  );
};
export {userContext}
export default App;
