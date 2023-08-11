import React from "react";

//create function Text
function Text({size,children}){

    //recive size to text
    const style = {
        fontSize: size+'px',
    };
    return (
        <p style={style}>{children}</p>
    );
}

//export
export default Text;