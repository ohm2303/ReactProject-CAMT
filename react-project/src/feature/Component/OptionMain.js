import React from "react";
import { menuItems } from "../../asset/menuItems";
import Option from "../Component/Option";
import '../style/OptionMain.css';

const OptionMain = () => {
    
    return(
        <>
            <ul className="menus">
                {menuItems.map((menu,index) => {
                    const depthLevel = 0;
                    return <Option items={menu} key={index} depthLevel={depthLevel}/>
                })}
            </ul>
        </>
    )
}

export default OptionMain;
/* 
Kanokwan
วิธีการใช้
<OptionMain />
*/