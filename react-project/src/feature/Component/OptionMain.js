import React from "react";
import { menuItems } from "../../asset/menuItems";
import Option from "../Component/Option";
import styled from "styled-components";

const OptionMain = ({ className }) => {
  return (
    <div className={className}>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <Option items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </div>
  );
};

export default styled(OptionMain)`
.menus {
    width: 400px;
    height: 50px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    border: 1px solid #ccc; /* กรอบคลุมทั้งหมด */
    background-color: #f9f9f9; /* สีพื้นหลัง */
  }
  
  .menu-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-right: 1px solid #ccc; /* เส้นแบ่งรายการ */
  }
  
  .menu-item:last-child {
    border-right: none;
  }
  
  .active {
    font-weight: bold;
  }
  
  .dropdown-arrow {
    margin-left: auto;
    margin-right: 0.5rem;
  }
  
  .submenu {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .submenu-depth-1 {
    margin-left: 1rem;
  }
  
  .submenu-depth-2 {
    margin-left: 2rem;
  }
`;
/* 
Kanokwan
วิธีการใช้
<OptionMain />
*/
