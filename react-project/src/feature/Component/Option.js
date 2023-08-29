import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../SubComponent/Dropdown";
import styled from "styled-components";


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
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.submenu && items.url ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
        </>
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
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: inherit;
    padding: 0;
    margin: 0;
    text-decoration: underline;
    color: blue;
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
    text-decoration: underline;
    color: blue;
    display: flex;
    align-items: center;
  }
  
  .dropdown-button:focus {
    outline: none;
  }
  
  .dropdown-arrow {
    margin-left: auto;
    margin-right: 0;
  }
  
  .dropdown {
    display: none;
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
`;

/* 
Kanokwan Mahakham
วิธีการใช้
  1.ต้องสร้างไฟล์ data ที่ต้องการใช้ใน floder asset ก่อน(ตัวอย่างอยู่ใน menuItems.js)

  2.ดึงมาใช้โดย
    {menuItems.map((menu,index) => {
        const depthLevel = 0;
          return <Option items={menu} key={index} depthLevel={depthLevel}/>
    })}

*/