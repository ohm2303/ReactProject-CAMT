import React from "react";
import Option from "../Option";
import '../style/Dropdown.css';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
 const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) =>(
          <Option items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    );
  };
  
  export default Dropdown;
  /* 
  Kanokwan Mahakham
  วิธีการใช้
  ตัวนี้เป็นส่วนหนึ่งของ Option เวลาใช้ให้ไปเรียกตัว Option นะจ๊ะ
  */