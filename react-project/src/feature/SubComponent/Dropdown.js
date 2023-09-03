import React from "react";
import Option from "../Component/Option";
import styled from "styled-components";
import PropTypes from "prop-types";

const Dropdown = ({ submenus, dropdown, depthLevel,className }) => {
  depthLevel = depthLevel + 1;
 const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return (
      <div className={className}>
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) =>(
          <Option items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
      </div>
    );
  };
  
  Dropdown.propTypes = {
    submenus: PropTypes.object.isRequired,
    dropdown: PropTypes.object.isRequired,
    depthLevel: PropTypes.number.isRequired,
    className: PropTypes.string,
  };

  export default styled(Dropdown)`
  .dropdown {
  display: none;
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  
}

  
    
    .show {
      display: block;
    }
  
  
    
    .menu-items {
      padding: 1rem;
      border-bottom: 1px solid #ccc;
      width: 100%;
      background: #ddd;
      top: calc(100% + 0.5rem);
      left: 0;
      box-sizing: border-box;
      border-radius: 5px;
      max-height: 100px;
      overflow-y: auto;
      padding: 20px;
    }
    
    .menu-items a {
      text-decoration: center;
      color: black;
    }
    
    .menu-items a:hover {
      background-color: #f5f5f5;
    }
  `;
  /* 
  Kanokwan Mahakham
  วิธีการใช้
  ตัวนี้เป็นส่วนหนึ่งของ Option เวลาใช้ให้ไปเรียกตัว Option นะจ๊ะ
  */