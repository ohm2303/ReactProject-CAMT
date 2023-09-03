import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../SubComponent/Dropdown";
import styled from "styled-components";
import PropTypes from "prop-types";

//create function option
function Option({ items, depthLevel ,className}) {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  Option.propType = {
    items: PropTypes.array.isRequired,
    depthLevel: PropTypes.number.isRequired,
    className: PropTypes.string,
  };

  return (
    <div className={className}>
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu && items.url ? (
        <>
          <button
          className="button-main"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <a href={items.url}>{items.title}</a>
            )}
            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span></span>
            ) : (
              <span/>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.submenu && items.url ? (
        <div className="menu-item-sub">
          <button
            className="button-option"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span></span>
            ) : (
              <span></span>
            )}
          </button>
        </div>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
    </div>
  );
}

export default styled(Option)`
.menu-items {
    list-style: none;
    margin: 0;
    padding: 0;
    border: none;
  }
  .menu-item li{
    background: gray;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: inherit;
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: black;
    
  }
  
  button:focus {
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  .dropdown-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: inherit;
    padding: 0;
    margin: 0;
    color: blue;
    display: flex;
    align-items: center;
    
  }
  
  .dropdown-button:focus {
    outline: none;
  }
  
  .dropdown {
    display:none;
    position: absolute;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .show {
    display: block;
  }
  
  .submenu-items {
    padding: 0.5rem 1rem;
  }
  
  .submenu-items a {
    text-decoration: none;
    color: black;
  }
  
  .submenu-items a:hover {
    background-color: #f5f5f5;
  }

  .button-option {
    background: white;
    height: 50px;
    width: 200px;
    border: none; /* ลบเส้นกรอบทั้งหมด */
  
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* เพิ่มเงา */
}

.menu-item-sub:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  bottom: 5px;
  left: calc(50% - 2px);
  background: #FECEAB;
  will-change: transform;
  transform: scale(0);
  transition: transform 0.2s ease;
}
.menu-item-sub:hover:after {
  transform: scale(1);
}
.menu-item-sub {
  position: relative;
  line-height: 2.5rem;
  text-align: center;
}
.button-option .menu-item-sub{
  padding: 0.75rem 0;
  background: #F67280;
  opacity: 0;
  transform-origin: bottom;
  animation: enter 0.2s ease forwards;
}

.button-option .menu-item-sub:nth-child(1) {
  animation-duration: 0.2s;
  animation-delay: 0s;
}
.button-option .menu-item-sub:nth-child(2) {
  animation-duration: 0.3s;
  animation-delay: 0.1s;
}
.button-option .menu-item-sub:nth-child(3) {
  animation-duration: 0.4s;
  animation-delay: 0.2s;
}
.button-option .menu-item-sub:hover {
  background: #F8B195;
}
.button-main a{
  font-size: 20px;
  font-weight: 600;
}
.button-option a{
  font-size: 18px;
  font-weight: 600;
}

 .button .menu-item-sub{
  border: none;
 }
`;

/* 
Kanokwan Mahakham//
วิธีการใช้
  1.ต้องสร้างไฟล์ data ที่ต้องการใช้ใน floder asset ก่อน(ตัวอย่างอยู่ใน menuItems.js)

  2.ดึงมาใช้โดย
    {menuItems.map((menu,index) => {
        const depthLevel = 0;
          return <Option items={menu} key={index} depthLevel={depthLevel}/>
    })}

*/