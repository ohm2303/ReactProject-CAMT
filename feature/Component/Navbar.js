import React from "react";
import styled from "styled-components";
import Input from "../SubComponent/Input";
import RegisterReader from "./RegisterReader";
import Search from "../SubComponent/Search";
import { Link } from "react-router-dom";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      color: #7BA2AE;
    }
  }

  .navigation {
    display: flex;
    list-style-type: none;

    li {
      opacity: 1;
      list-style-type: none;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
    }

    .parent {
      padding: 10px 120px;
      cursor: pointer;

      .link {
        position: relative;
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        color: white;

        &:hover {
          color: #7BA2AE;
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


 
`;

const ContentWrapper = styled.div`
  padding-top: 60px;
`;

const Navbar = ({ onSearchResults }) => {
  return (
    <div>
      <StyledNavbar>
        <nav class="navigationWrapper">
          <div class="logoWrapper">
            <span class="logo">Logo</span>
          </div>
          <ul class="navigation">
            <li class="parent">
              <a class="link" href="#">
                Home
              </a>
            </li>
            <Search
              onSearchResults={onSearchResults}
              size="400px"
              heightSize="20px"
            />
            <li class="parent">
              <a class="link" href="#">
                Basket
              </a>
            </li>
            <li class="parent">
              <a class="link" href="#">
                Login/Register
              </a>
            </li>
          </ul>
        </nav>
      </StyledNavbar>
      <ContentWrapper></ContentWrapper>
    </div>
  );
};

export default Navbar;
