import React from "react";
import "../feature/style/Nav.css"
import Input from "./SubComponent/Input"
//create function navbar
function Nav(){
    return (
        <header className="Navbar">
            <dev className='Logo-Nav'>Logo</dev>
            <dev className='Text-Nav'>Home</dev>
            <dev className='Text-Nav'>Recommend</dev>
            <dev className='Text-Nav'>Coin</dev>
            <Input placeholder={"Search for anything"} size={"250px"} heightSize={"30px"}></Input>
            <dev className='Text-Nav'>ฺBasket</dev>
            <dev className='Text-Nav'>Login/Register</dev>
        </header>
    );
}

//export
export default Nav