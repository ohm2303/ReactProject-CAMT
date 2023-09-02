import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faLayerGroup,
  faArrowRightFromBracket,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
function DropdownMenu(props) {
  // const [data, setData] = useState({});
  // useEffect( () => {
  //   fetch((http://localhost:8080/users/1),{
  //         method:"GET",
  //   })
  //     .then(response => response.json())
  //     .then(data => setData(data))
  // },[])
  return (
    <div className="DropdownMenu">
      <ul className="DropdownMenu_List">
        <li>
          <a href="#click" className="DropdownMenu_menu">
            <div className="DropdownMenu_menu-title">
              <div className="DropdownMenu_titlepic">
                <img
                  className="DropdownMenu_pic"
                  src="https://static.wixstatic.com/media/b8bf36_52171394df9843e9ba121e738a377ba5~mv2.jpeg/v1/fill/w_442,h_638,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/STITCH%20HEAD%20THE%20GRAPHIC%20NOVEL%20COVER.jpeg"
                />
                <div className="DropdownMenu_icon">
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ color: "#03a300" }}
                  />
                </div>
              </div>
              <div className="DropdownMenu_titleDetail">
                <label>{props.title}</label>
                <label>{props.email}</label>
              </div>
            </div>
            <ul className="DropdownMenu_menu-dropdown">
              {false ? (
                <>
                  <li>
                    <FontAwesomeIcon icon={faLayerGroup} />
                    My Collection
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    Log Out
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <FontAwesomeIcon icon={faLayerGroup} /> My Collection
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCoins} /> For Selling
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} /> Log Out
                  </li>
                </>
              )}
            </ul>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;