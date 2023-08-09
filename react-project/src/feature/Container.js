import React from "react";
import Proptypes from Proptypes;

//create function container
function Container({children}){
    return <main>{children}</main>;
}

//check type of prop
Container.propType = {
    children: Proptypes.String.isRequired,
};

//export
export default Container;