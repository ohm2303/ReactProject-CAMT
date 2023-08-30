import React from "react";
import PhotoSlide from "../Component/PhotoSlide";
import NovelMain from "../Component/NovelMain";
import Option from "../Component/Option";
//create function Home
function Home(){
    return (
        <>
            <PhotoSlide/>
            <PhotoSlide/>
            <PhotoSlide/>
            <Option/>
            <NovelMain/>
        </>
    );
}

//export
export default Home