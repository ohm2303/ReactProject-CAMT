import React, { useState } from "react";
import PhotoSlide from "../Component/PhotoSlide";
import NovelMain from "../Component/NovelMain";
import data from "../../asset/novelData";
import styled from "styled-components"; 
import Navbar from "../Component/Navbar";
//home page


function Home({ className }) {
  const [noImg,setNoImg] = useState(data);
  const imageslide = noImg.map(dataNov => require(`../../pics/Noval/${dataNov.imgUrl}`));

  return (
    <div className={className}>
    <>  
      <Navbar></Navbar>

      <PhotoSlide images={imageslide}></PhotoSlide>


      <NovelMain></NovelMain>
    </>
    </div>
  );
}

export default Home;
