import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-styled-flexboxgrid';
import { movieLoadPerPage } from '../AC';
import { moviesSelector } from '../selectors';
import MoviesList from './MoviesList';

class Movies extends Component {
  state = {};

  render() {
    // movies, page, loading
    // id, title, overview, posterPath, releaseDate, genreIds, voteAverage
    const { loading, movies, loaded } = this.props;
    debugger;
    if (loading) return 'loading';

    // HANDLE SOMEHOW TO UNDERSTAND IF NO RESULTS OR IT HASNT STARTED YET
    if (!loaded) return null;
    return (
      <Row style={{ justifyContent: 'center' }}>
        <Col xs={12}>
          <Row>
            <MoviesList movies={movies} />
          </Row>
        </Col>
      </Row>
    );
  }

  componentDidMount() {
    this.onInitialLoad();
  }

  onInitialLoad = () => {
    // ???
    // const { page } = this.props;
    // if (page === 1) {
    this.props.movieLoadPerPage(1);
    // }
  };
}

const mapStateToProps = state => {
  const { loading, loaded, page } = state.movies;

  return {
    movies: moviesSelector(state),
    loading,
    loaded,
    page
  };
};

export default connect(
  mapStateToProps,
  { movieLoadPerPage }
)(Movies);
