import React from "react";
import { menuItems } from "../../asset/menuItems";
import Option from "../Component/Option";
import styled from "styled-components";
import useFetch from "../Hook/useFetch";
import PropTypes from 'prop-types';

const OptionMain = ({ className }) => {
  const Api_Novel = `/novels`;
  const { data } = useFetch(Api_Novel);
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

OptionMain.propType = {
  className: PropTypes.string,
};

export default styled(OptionMain)`
  * {
    font-family: "Anuphan";
  }
  .menus {
    width: 100%;
    height: 90px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    border: none;
    background-color: #f9f9f9;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
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
