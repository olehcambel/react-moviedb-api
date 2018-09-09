import styled from 'styled-components';
import React, { PureComponent } from 'react';
import Flex from 'styled-flex-component';
import { Col } from 'react-styled-flexboxgrid';
import GenresList from './GenresList';
import { Link } from 'react-router-dom';

const Title = styled(Link)`
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

class Movie extends PureComponent {
  state = {};

  render() {
    const { id, title, genreIds } = this.props.movie;
    return (
      <Column md={4} sm={6} xs={9}>
        <Title className="no-hover" to={`/movie/${id}`} title={title}>
          {this.movieTitle(title)}
        </Title>
        <Flex>
          <GenresList genreIds={genreIds} />
        </Flex>
      </Column>
    );
  }

  movieTitle = title =>
    title.length > 50 ? `${title.substring(0, 50)}..` : title;
}

export default Movie;
