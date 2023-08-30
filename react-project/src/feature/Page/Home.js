import React from "react";
import PhotoSlide from "../Component/PhotoSlide";
import NovelMain from "../Component/NovelMain";
import OptionMain from "../Component/OptionMain";
//create function Home
function Home(){
    return (
        <>
            <PhotoSlide/>
            <OptionMain/>
            <NovelMain/>
        </>
    );
}

//export
export default Home