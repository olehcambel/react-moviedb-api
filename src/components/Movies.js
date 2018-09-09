import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-styled-flexboxgrid';
import { movieLoadPerPage } from '../AC';
import { moviesSelector } from '../selectors';
// import MoviesList from './MoviesList';
import AdvancedMoviesList from './AdvancedMoviesList';

class Movies extends PureComponent {
  state = {};

  render() {
    // movies, page, loading
    // id, title, overview, posterPath, releaseDate, genreIds, voteAverage
    const { loading, movies, loaded, page } = this.props;

    // TEMPORARY. 'D BE BETTER HANDLE
    if (loading && !movies.length) return 'loading';

    // HANDLE SOMEHOW TO UNDERSTAND IF NO RESULTS OR IT HASNT STARTED YET
    if (!loaded && !movies.length) return null;
    return (
      <Row style={{ justifyContent: 'center' }}>
        <Col xs={12}>
          <Row>
            <AdvancedMoviesList
              movies={movies}
              isLoading={loading}
              page={page}
              onPaginatedSearch={this.onLazyLoad}
            />
            {/* <MoviesList movies={movies} /> */}
          </Row>
          {/* <Scroll onBottom={this.onLazyLoad} /> */}
        </Col>
      </Row>
    );
  }

  componentDidMount() {
    if (this.props.loaded) return;
    this.onInitialLoad();
  }

  onInitialLoad = () => {
    // ???: first reason for ERROR
    const { page, loaded } = this.props;
    if (!page || page !== 1 || !loaded) {
      this.props.movieLoadPerPage(1);
    }
  };

  onLazyLoad = () => {
    this.props.movieLoadPerPage(this.props.page + 1);
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
