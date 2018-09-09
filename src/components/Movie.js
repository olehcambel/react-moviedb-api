import styled from 'styled-components';
import React, { Component } from 'react';
import Flex from 'styled-flex-component';
import { Col } from 'react-styled-flexboxgrid';

import { Link } from 'react-router-dom';

const Name = styled(Link)`
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.main};
  line-height: 1 !important;
  margin-bottom: 10px;
  margin-top: 0;
  padding-left: 0;
  word-break: break-all;
  border: 0;
  display: block;
`;

const Column = styled(Col)`
  transition: all 200ms ease;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 40px;
`;

class Movie extends Component {
  state = {};

  render() {
    const { id, title } = this.props.movie;
    return (
      <Column md={4} sm={6} xs={9}>
        <Name className="no-hover" to={`/movie/${id}`} title={title}>
          {title}
        </Name>
      </Column>
    );
  }
}

export default Movie;
