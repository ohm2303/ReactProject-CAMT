import React from "react";
import styled from "styled-components";
import Input from "../SubComponent/Input";
import RegisterReader from "./RegisterReader";
import Search from "../SubComponent/Search";

const StyledNavbar = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  background-color: #2f6d80;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  font-family: "Anuphan";

  .nav-text {
    font-size: 24px;
    margin-right: 20px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ContentWrapper = styled.div`
  padding-top: 60px;
`;

const Navbar = ({ onSearchResults }) => {
  return (
    <div>
      <StyledNavbar>
        <div className="nav-text">Logo</div>
        <div className="nav-text">Home</div>
        <div className="nav-text">Recommend</div>
        <div className="nav-text">Coin</div>
        <Search  onSearchResults={onSearchResults} size="250px" heightSize="20px" />
        <div className="nav-text">Basket</div>
        <div className="nav-text">Login/Register</div>
      </StyledNavbar>
      <ContentWrapper></ContentWrapper>
    </div>
  );
};

export default Navbar;
