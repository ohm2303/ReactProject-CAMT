import React ,{useContext, useState,useEffect} from "react";
import Text from "../SubComponent/Text";
import Nav from "../Component/Navbar";
import NovelProduct from "../../feature/Novel_Product";
import novelData from "../../asset/novelData";
import styled from "styled-components";
import { userContext } from "../../App";

const MyCollection = ({ className }) => {
  const [novels, setNovel] = useState([]);
  const {dataCon,setDatacon} = useContext(userContext)

  console.log(dataCon.id)
  useEffect(() => {
    fetch((`${process.env.REACT_APP_API_PREME}/api/user/myCollection/buy/${dataCon.id}`),{    
      method:"GET",                                     
  })
  .then(response => response.json())
  .then(data=>{ 
    setNovel(data)
    console.log("from Buy")
    console.log(novels[0])
  })
  },[])
  return (
    <div className={className}>
      
      <div className="content">
        <div className="title">
          <Text size={50} family={"Anuphan"} weight="bold">
            The book-buster
          </Text>
        </div>

        <div className="Ordered_Books">
        <div className="Ordered_Books_title">
            <Text size={40} family={"Anuphan"} weight="blod">
            Ordered Books
            </Text>
          </div>
          <div className="Novel_Ordered">
            {novels.length > 0 ? (
              <ul className="Novel__Product">
                {novels.map((novel) => (
                  <NovelProduct key={novel.id} item={novel}></NovelProduct>
                ))}
              </ul>
            ) : (
              <div className="load">Loading Novels....</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(MyCollection)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .content {
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: center;
    flex-direction: column;
  }
  .title {
    display: flex;
    flex-direction: column;
    /* justify-Content */
    align-items: center;
  }
  .MyCollection {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .MyCollection_title{
    position: relative;
  }
  .MyCollection_title p{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .MyCollection_title::after {
  content: ""; 
  position: absolute;
  left: 0; 
  bottom: -5px; 
  width: 100%; 
  height: 1px; 
  background-color: black; 
}
.Novel_Like{
    display: flex;
    justify-content: center;
    align-items: center;
}
.Novel__Product{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    padding: 0px;
    width: 100%;
    border: none;
    justify-content: center;
    background-color:#e1e7e0;
}
.Ordered_Books {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .Ordered_Books_title{
    position: relative;
  }
  .Ordered_Books_title p{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .Ordered_Books_title::after {
  content: ""; 
  position: absolute;
  left: 0; 
  bottom: -5px; 
  width: 100%; 
  height: 1px; 
  background-color: black; 
}
.Novel_Ordered{
    display: flex;
    justify-content: center;
    align-items: center;
}

`;