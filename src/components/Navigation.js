import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Container from './Container';
import Logo from '../assets/logo.svg';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    line-height: 40px;
  }
`;

const LogoWrapper = styled(Link)`
  opacity: 1;
  border: none;
  &:after {
    display: none;
  }
`;

const Item = styled.li`
  @media (max-width: 768px) {
    font-size: 16px;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default class Navigation extends Component {
  render() {
    return (
      // <Container>
      <Nav>
        <LogoWrapper to="/">
          <img src={Logo} width="70" alt="Home" />
        </LogoWrapper>
        <List>
          <Item>
            <Link to="/">
              <span>Movies</span>
            </Link>
          </Item>
          <Item>
            <Link to="/categories">
              <span>Categories</span>
            </Link>
          </Item>
          <Item>
            <Link to="/favorites">
              <span>Favorites</span>
            </Link>
          </Item>
        </List>
      </Nav>
      /* </Container> */
    );
  }
}
