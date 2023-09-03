import React, { useContext, useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import Input from "../SubComponent/Input";
import RegisterReader from "./RegisterReader";
import Search from "../SubComponent/Search";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import DropdownMenuu from "../SubComponent/Dropdownmenuu";

//Redux
import {useSelector, useDispatch} from "react-redux";
import { hidelogin, showlogin, showregister } from "../../store/showloginSlice";


import RegisterAuthor from "./RegisterAuthor";

const StyledNavbar = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(45deg, #ea4f4c 0%, #6d0019 100%);

    .signature {
      font-style: italic;
      font-size: 12px;
      color: #212121;
      padding-top: 15px;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: white;
      }
    }
  }

  .navigationWrapper {
    position: relative;
    align-items: center;
    justify-content: space-around;
    padding: 7px;
    background-color: #222;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    color: white;
    text-transform: uppercase;
    overflow: hidden;
    width: 100%;

    .logoWrapper {
      display: flex;

      .stylish {
        font-weight: bold;
      }

      .logo {
        padding-left: 20px;
        color: #7ba2ae;
      }
    }

    .navigation {
      display: flex;
      list-style-type: none;
      align-items: center;

      li {
        opacity: 1;
        list-style-type: none;
        color: white;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
      }

      .parent {
        padding: 2px 55px;
        cursor: pointer;

        .link {
          position: relative;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          color: white;
          &:hover {
            color: #7ba2ae;
          }

          .fa-minus {
            opacity: 0;
            transition: all 0.3s ease-in-out;
            position: absolute;
            left: -16px;
            top: 3px;
          }

          .fa-plus {
            opacity: 1;
            transition: all 0.3s ease-in-out;
          }

          .fas {
            color: #ea4f4c;
            margin: -2px 4px 0;
            font-size: 10px;
            transition: all 0.3s ease-in-out;
          }
        }
      }

      .subnavigation {
        display: none;
        list-style-type: none;
        width: 500px;
        position: absolute;
        top: 40%;
        left: 25%;
        margin: auto;
        transition: all 0.3s ease-in-out;
        background-color: #222;

        li a {
          font-size: 17px;
          padding: 0 5px;
        }
      }
    }
  }

  .active.parent {
    transform: translate(-40px, -25px);
    .link {
      font-size: 12px;

      .fa-minus {
        opacity: 1 !important;
        font-size: 8px;
      }

      .fa-plus {
        opacity: 0 !important;
      }
    }

    .subnavigation {
      display: flex;
    }
  }

  .active#clients {
    .subnavigation {
      transform: translate(-150px, 17px);
    }
  }

  .active#services {
    .subnavigation {
      transform: translate(-290px, 17px);
    }
  }

  .invisible {
    opacity: 0 !important;
    transform: translate(50px, 0);
  }
  .link {
    text-decoration: none;
    color: white;
  }
  .link {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease-in-out;
  }

  .link:hover {
    color: #8ae3ff;
  }
  .user {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  .pic {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .pic p {
    margin-right: 15px;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 60px;
`;

const Navbar = ({onSearchResults}) => {
  const { dataCon, setDataCon } = useContext(userContext);
  const[level,setLevel]=useState(dataCon.level)
  {console.log("from test level")}
  {console.log(level)}
  const user = require("../../pics/Icon/proflie.png");
  const logout = require("../../pics/Icon/logout.png");

  const logOut = () => {
    document.cookie = 'id' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setDataCon({displayname :"", id:"", email:""})
  }


  const dispatch = useDispatch();
  const isLoginOpen = useSelector((state) => state.login.login);
  const isRegisterOpen = useSelector((state) => state.login.register);
  const isRegister2Open = useSelector((state) => state.login.register2);

  const Register = () => {
    dispatch(hidelogin());
    dispatch(showregister());
  }

  return (
    <div>
      {dataCon.level == 0 ? (
        <StyledNavbar>
          <nav class="navigationWrapper">
            <ul class="navigation">
              <li class="parent">
                <Link to={`/`} className="link">
                  <span className="link-text">Home</span>
                </Link>
              </li>

              <Search
                onSearchResults={onSearchResults}
                size="400px"
                heightSize="20px"
              />

              <li class="parent">
                <Link to={`/Basket`} className="link">
                  <span className="link-text">Basket</span>
                </Link>
              </li>
              {console.log(dataCon.displayname)}
                      {console.log(dataCon.level)}
              <li class="parent">
                <Link to={`/myCollection`} className="link">
                  <span className="link-text">My Collection</span>
                </Link>
              </li>

              <li class="parent">
                {dataCon.displayname !== "" ? (
                  <div className="pic">
                    <img alt="" src={user}/>
                    <p>{dataCon.displayname}</p>
                    <img alt="" src={logout} onClick={()=>logOut()}/>
                    </div>
                ) : (
                  <div className="link"onClick={()=>dispatch(showlogin())}><span className="link-text">login/register</span>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </StyledNavbar>
      ) : (
        <div>
          <StyledNavbar>
            <nav class="navigationWrapper">
              <ul class="navigation">
                <li class="parent">
                  <Link to={`/`} className="link">
                    <span className="link-text">Home</span>
                  </Link>
                </li>
                <Search
                  onSearchResults={onSearchResults}
                  size="400px"
                  heightSize="20px"
                />
                <li class="parent">
                  <Link to={`/Basket`} className="link">
                    <span className="link-text">Basket</span>
                  </Link>
                </li>
                <li class="parent">
                  <Link to={`/myCollection`} className="link">
                    <span className="link-text">My Collection</span>
                  </Link>
                </li>
                {console.log(dataCon.displayname)}
                      {console.log(dataCon.level)}
                <li class="parent">
                  <Link to={`/addBook`} className="link">
                    <span className="link-text">For Selling</span>
                  </Link>
                </li>
                <li class="parent">
                  {dataCon.displayname !== "" ? (
                    <div className="pic">
                      <img alt="" className="user" src={user} />
                      <p>{dataCon.displayname}</p>
                      <img alt="" className="logout" src={logout} onClick={()=>logOut()}/>
                  
                    </div>
                    //for test{
               
                  ) : (
                    <div className="link" >
                      <span className="link-text" onClick={()=>dispatch(showlogin())} >login</span><span onClick={()=> Register()}>/register</span>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </StyledNavbar>
        </div>
      )}
      {isLoginOpen && <Login  />}
      {isRegisterOpen && <RegisterReader />}
      {isRegister2Open && <RegisterAuthor />}
      <ContentWrapper></ContentWrapper>
    </div>
  );
};

export default Navbar;
