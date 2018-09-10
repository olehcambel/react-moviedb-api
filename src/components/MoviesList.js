import React, { PureComponent } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import Flex from 'styled-flex-component';
import { Title } from './Header';
import Movie from './Movie';

class MoviesList extends PureComponent {
  state = {};

  render() {
    const { movies } = this.props;
    debugger;

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
            <Movie key={m.id} movie={m} />
          ))}
        </Row>
      </Col>
    );
  }
}

export default MoviesList;
