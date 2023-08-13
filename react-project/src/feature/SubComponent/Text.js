import React from "react";

//create function Text
function Text({size,children,family}){

    //recive size to text
    const style = {
        fontSize: size + 'px',
        fontFamily:  family,
    };
    return (
        <p style={style}>{children}</p>
    );
}

//export
export default Text;

//example to use
{/* <Text size={25} family={'Times New Roman'}>ขายดี sadsa</Text> */}