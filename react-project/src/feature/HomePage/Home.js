import React, { useState } from "react";
import Nav from "../Navbar";
import PhotoSlide from "../PhotoSlide";
import OptionMain from "../OptionMain";
import NovelMain from "../NovelMain";
import data from "../../asset/novelData";
//home page
function Home() {
  const [noImg,setNoImg] = useState(data);
  const imageslide = noImg.map(dataNov => require(`../../pics/Noval/${dataNov.imgUrl}`));
  return (
    <>
      <Nav></Nav>
      <PhotoSlide images={imageslide}></PhotoSlide>
      <OptionMain></OptionMain>
      <NovelMain></NovelMain>
    </>
  );
}
export default Home;
