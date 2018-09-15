import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-styled-flexboxgrid';
import { movieLoadPerPage, movieLoadByQuery } from '../AC';
import { moviesSelector } from '../selectors';
// import MoviesList from './MoviesList';
import AdvancedMoviesList from './AdvancedMoviesList';

class Movies extends PureComponent {
  state = {};

  render() {
    const {
      loading,
      movies,
      loaded,
      page,
      query,
      noLazyLoad,
      error
    } = this.props;

    // TEMPORARY. 'D BE BETTER HANDLE
    if (loading && !movies.length) return 'loading';
    // HANDLE SOMEHOW TO UNDERSTAND IF NO RESULTS OR IT HASNT STARTED YET
    if (!loaded && !movies.length) return null;

    return (
      <Row style={{ justifyContent: 'center' }}>
        <Col xs={12}>
          <Row>
            <AdvancedMoviesList
              query={query}
              isError={error}
              movies={movies}
              isLoading={loading}
              page={page}
              onPaginatedSearch={() =>
                noLazyLoad ? undefined : this.onLazyLoad()
              }
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
    const { page, loaded, searchBy, movieLoadPerPage } = this.props;
    if (!page || page !== 1 || !loaded) {
      movieLoadPerPage(1, searchBy);
    }
  };

  onLazyLoad = () => {
    // BUG. when no left results. it just infinity times trying to fetch data
    const {
      page,
      movieLoadPerPage,
      movieLoadByQuery,
      query,
      searchBy
    } = this.props;
    query
      ? movieLoadByQuery(page + 1, query)
      : movieLoadPerPage(page + 1, searchBy);
  };
}

const mapStateToProps = (state, ownProps) => {
  const { loading, loaded, page, error } = state.movies;
  return {
    movies: moviesSelector(state, ownProps),
    loading,
    loaded,
    page,
    error,
    query: state.filters.query,
    searchBy: ownProps.searchBy ? ownProps.searchBy : state.filters.searchBy
  };
};

export default connect(
  mapStateToProps,
  { movieLoadPerPage, movieLoadByQuery }
)(Movies);
