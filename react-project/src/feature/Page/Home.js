import React from "react";
import PhotoSlide from "../PhotoSlide";
import NovelMain from "../NovelMain";
import Option from "../Option";
//create function Home
function Home(){
    return (
        <>
            <PhotoSlide/>
            <Option/>
            <NovelMain/>
        </>
    );
}

//export
export default Home