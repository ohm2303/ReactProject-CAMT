import React, { useEffect ,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./feature/GlobalStyle";
import Busket from "../src/feature/Page/Basket"
import Home from "./feature/Page/Home";
import Load from "./feature/SubComponent/Load";
import MyCollection from "./feature/Page/MyCollection";
import Novel from "./feature/Page/Novel";

// const dataCon = { username: "eitwlujr", password: "12121" };

const userContext = React.createContext();

const Testapp = () => {
    const [dataCon, setDataCon] = useState({displayname :"", id:"", email:""})
    const [data, setData] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [page, setPage] = useState('login')
   

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
            setData(false)
            setDataCon({displayname :"", id:"", email:""})
            setLoading(false)
            return
          }
        setData(data)
        setDataCon({displayname :data[0].display_name, id:data[0].id, email:data[0].email})
        setLoading(false)
        },[dataCon])
    })
  return (
    <>
    <userContext.Provider value={{dataCon,setDataCon}}>
    <GlobalStyle/>
    {isLoading ? <Load/> : 
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        
        <Route path="/Basket" element={<Busket/>}></Route>
        <Route path="/myCollection" element={<MyCollection/>}></Route>
        <Route path="/Review" element={<Novel/>}></Route>
      </Routes>
    </BrowserRouter>
    </>}
    </userContext.Provider>
    </>
  );
};
export {userContext}
export default Testapp;
