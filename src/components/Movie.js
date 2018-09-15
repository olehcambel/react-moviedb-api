import styled from 'styled-components';
import React, { PureComponent } from 'react';
import Flex from 'styled-flex-component';
import { Col } from 'react-styled-flexboxgrid';
import GenresList from './GenresList';
import { Link } from 'react-router-dom';
import Poster from './Poster';
import Favorite from './Favorite';
import Vote from './styling/Vote';

const Title = styled(Link)`
  font-weight: 700;
  font-size: 23px;
  color: ${props => props.theme.main};
  line-height: 1.5 !important;
  margin-bottom: 10px;
  margin-top: 0;
  padding-left: 0;
  word-break: break-all;
  border: 0;
  display: block;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.midGrey};
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

const Amount = styled.span`
  margin-bottom: 10px;
  margin-top: -5px;
  display: block;
  opacity: 0.8;
  font-weight: 400;
  position: relative;
  top: 15px;
  color: ${props => props.theme.main};

  &:last-child {
    right: 10px;
  }
`;

class Movie extends PureComponent {
  state = {};
  render() {
    const {
      id,
      title,
      genreIds,
      releaseDate,
      voteAverage,
      posterPath,
      overview
    } = this.props.movie;
    return (
      <Column md={4} sm={6} xs={9}>
        <Flex justifyCenter>
          <Poster path={posterPath} name={title} />
        </Flex>
        <Flex justifyBetween alignCenter>
          <Amount>{this.getYear(releaseDate)}</Amount>
          <Amount>
            <Favorite id={id} />
          </Amount>
          <Amount>
            <Vote small number={voteAverage} max="10" />
          </Amount>
        </Flex>
        <Title
          className="no-hover"
          to={`${process.env.PUBLIC_URL}/movie/${id}`}
          title={title}
        >
          {this.movieSize(title, 50)}
        </Title>
        <Description>{this.movieSize(overview, 110)}</Description>
        <Flex>
          <GenresList ids={genreIds} />
        </Flex>
      </Column>
    );
  }

  movieSize = (title, size) =>
    title.length > size ? `${title.substring(0, size)}..` : title;

  getYear = date =>
    new Date(date).toLocaleDateString('en', {
      month: 'long',
      year: 'numeric'
    });
}

export default Movie;
