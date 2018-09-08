import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 30px;
  color: ${props => props.theme.main};

  h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    margin: 20px 0;
  }
`;

const Button = styled.div`
  margin-top: 40px;
  a {
    border: 0;
    padding: 7px 25px;
    background: rgb(238, 238, 238);
    font-weight: 700;
    border-radius: 4px;
    text-transform: uppercase;
    color: #333;

    &:hover {
      color: #555;
    }

    &:after {
      height: 0;
      background: none;
    }
  }
`;

export default () => (
  <Wrapper>
    <h1>Error 404</h1>
    <p>Page not found</p>
    <Button>
      <Link to="/">Back Home</Link>
    </Button>
  </Wrapper>
);
