import React, { useState, useEffect,useContext  } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userContext } from "../../App";
import PropTypes from "prop-types";
import {
  faCoins,
  faLayerGroup,
  faArrowRightFromBracket,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
function DropdownMenu(props) {
  const {dataCon,setDataCon} = useContext(userContext)
  const logOut = () => {
    document.cookie = 'id' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setDataCon({displayname :"", id:"", email:""})
  }
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
          <a  className="DropdownMenu_menu">
            <div className="DropdownMenu_menu-title">
              <div className="DropdownMenu_titlepic">
                <img
                  className="DropdownMenu_pic"
                  src={dataCon.pic}
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
                  <Link to={"/myCollection"}>
                    <FontAwesomeIcon icon={faLayerGroup} /> My Collection
                  </Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCoins} /> For Selling
                  </li>
                  <li onClick={()=>logOut()}>
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

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DropdownMenu;