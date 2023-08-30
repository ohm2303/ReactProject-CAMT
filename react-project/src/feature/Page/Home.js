import React, { useState } from "react";
import Nav from "../Component/Navbar";
import PhotoSlide from "../Component/PhotoSlide";
import OptionMain from "../Component/OptionMain";
import NovelMain from "../Component/NovelMain";
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
