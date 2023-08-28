import React from "react";
import styled from "styled-components";
import Input from "../SubComponent/Input";

const StyledNavbar = styled.header`
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

  .brand {
    font-size: 24px;
  }

  .nav-text {
    font-size: 18px;
    margin-right: 20px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }

  .basket {
    margin-right: 0;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 60px; 
`;

const Navbar = () => {
  return (
    <div>
      <StyledNavbar>
        <div className="brand">Logo</div>
        <div className="nav-text">Home</div>
        <div className="nav-text">Recommend</div>
        <div className="nav-text">Coin</div>
        <Input placeholder="Search for anything" size="250px" heightSize="20px" />
        <div className="basket">Basket</div>
        <div className="nav-text">Login/Register</div>
      </StyledNavbar>
      <ContentWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Navbar;  
