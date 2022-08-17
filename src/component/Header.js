import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src='images/logo.jpeg'></Logo>
      <NavMenu>
        <a>
          <span>HOME</span>
        </a>
        <a>
          <span>ROOMS</span>
        </a>
        <a>
          <span>GUESS</span>
        </a>
        <a>
          <span>POS</span>
        </a>
      </NavMenu>
      <UserImg src='images/user1.png' />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #002b5b;
  display: flex;
  align-items: center;
  padding: 0 36px;
  color: white;
`;

const Logo = styled.img`
  height: 60px;
  border-radius: 50%;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 50px;
  align-items: center;

  a {
    cursor: pointer;
    align-items: center;
    padding: 0 12px;

    span {
      font-size: 20px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: 0.5s;
        transform-origin: leftcenter;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
