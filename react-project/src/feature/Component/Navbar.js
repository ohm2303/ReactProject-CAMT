import React from "react";
import styled from "styled-components";
import Input from "../SubComponent/Input";

const Navbar = styled.header`
  background-color: #2f6d80; 
  color: white; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 24px;
`;

const NavText = styled.div`
  font-size: 18px;
  margin-right: 20px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const Basket = styled(NavText)`
  margin-right: 0;
`;

const Nav = () => {
  return (
    <Navbar>
      <Logo>Logo</Logo>
      <NavText>Home</NavText>
      <NavText>Recommend</NavText>
      <NavText>Coin</NavText>
      <Input placeholder="Search for anything" size="250px" heightSize="20px" />
      <Basket>Basket</Basket>
      <NavText>Login/Register</NavText>
    </Navbar>
  );
};

export default Nav;
