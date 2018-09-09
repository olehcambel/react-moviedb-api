import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import Flex from 'styled-flex-component';
import Search from './Search';
// import { withRouter } from 'react-router';

export const Title = styled.h1`
  opacity: 0.8;
  font-family: Avenir, Montserrat;
  font-weight: 600;
  font-size: 90;
  line-height: 1.2;
  color: ${props => props.theme.main};
  letter-spacing: -0.25;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: capitalize;

  @media (max-width: 768) {
    font-size: 30;
    position: relative;
    margin: auto;
    margin-bottom: 40;
    margin-top: -20;
  }
`;

const SearchWrapper = styled(Flex)`
  @media (max-width: 768) {
    flex-direction: column;
    margin-bottom: 30;
    justify-content: flex-start;

    h1 {
      margin-bottom: 0;
    }
  }
`;

const Wrapper = styled(Row)`
  margin-bottom: 60;

  @media (max-width: 768) {
    margin: auto;
    margin-bottom: 20;
  }
`;

const Header = ({ title = 'Popular Movies' }) => (
  <Wrapper>
    <Col xs={12}>
      <SearchWrapper full allignCenter justifyBetween>
        <Title>{title}</Title>
        <Search />
      </SearchWrapper>
    </Col>
  </Wrapper>
);

export default Header;
