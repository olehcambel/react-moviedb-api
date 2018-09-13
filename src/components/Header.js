import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import Flex from 'styled-flex-component';
import Search from './Search';

import is from 'styled-is';

// import { withRouter } from 'react-router';

export const Title = styled.h1`
  opacity: 0.8;
  font-family: Avenir, Montserrat;
  font-weight: 600;
  font-size: 70px;
  line-height: 1.2;
  color: ${props => props.theme.main};
  letter-spacing: -0.25px;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: capitalize;

  ${is('small')`
    font-size: 24px;
    color: ${props => props.theme.red};


    @media (max-width: 768px) {
      margin-bottom: 48px;
    }
`};

  @media (max-width: 1199px) {
    font-size: 45px;

    ${is('small')`
    font-size: 24px;

`};
  }

  @media (max-width: 991px) {
    font-size: 40px;

    ${is('small')`
    font-size: 22px;

`};
  }

  @media (max-width: 768px) {
    font-size: 30px;
    margin: auto;
    margin-bottom: 40px;
    margin-top: -20px;

    ${is('small')`
    font-size: 20px;

`};
  }
`;

const SearchWrapper = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 30px;
    justify-content: flex-start;

    h1 {
      margin-bottom: 0;
    }
  }
`;

const Wrapper = styled(Row)`
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 20px;
  }
`;

const Header = ({ title = 'Popular Movies', noSearch }) => (
  <Wrapper>
    <Col xs={12}>
      <SearchWrapper full alignCenter justifyBetween>
        <Title>{title}</Title>
        {noSearch ? null : <Search />}
      </SearchWrapper>
    </Col>
  </Wrapper>
);

export default Header;
