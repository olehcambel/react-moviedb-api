import React, { PureComponent } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import Flex from 'styled-flex-component';
import { Title } from './Header';
import MoviePreview from './MoviePreview';

class MoviesList extends PureComponent {
  state = {};

  render() {
    const { movies } = this.props;
    // handle !movies
    return (
      <Col xs={12}>
        <Row>
          {!movies.length && (
            <Flex justifyCenter full>
              <Title small>No such movies in our DB</Title>
            </Flex>
          )}
          {movies.map(m => (
            <MoviePreview key={m.id} movie={m} />
          ))}
        </Row>
      </Col>
    );
  }
}

export default MoviesList;
