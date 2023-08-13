import React from "react";
import Text from "../SubComponent/Text";
import "../style/NovelMain.css"
//create novel product 
function NovelProduct({item}){
    // require img
    const novImg = require(`../../pics/Noval/${item.imgUrl}`);
    // return novel 
        // img
        // book name
        // name of author
        // category
    return(
        <li className="Novel">
            <img className="Novel-img" src={novImg} alt={item.name} />
            <Text size={18} className="Novel-name">name: {item.name}</Text>
            <Text size={18} className="Novel-name">author: {item.author}</Text>
            <Text size={18} className="Novel-name">category: {item.category}</Text>
        </li>
    );
}

//export
export default NovelProduct;