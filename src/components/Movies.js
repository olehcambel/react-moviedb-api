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
    const { loading, movies, page, query, noLazyLoad, error } = this.props;

    // TEMPORARY. 'D BE BETTER HANDLE
    if (loading && !movies.length) return 'loading';
    // HANDLE SOMEHOW TO UNDERSTAND IF NO RESULTS OR IT HASNT STARTED YET
    if (!movies.length) return null;

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
    const { movies, page } = this.props;
    debugger;
    if (!movies.length && (!page || page === 1)) this.onInitialLoad();
  }

  componentDidUpdate(prev) {
    const { loading, id } = this.props;
    if (!loading && prev.id !== id) {
      this.onInitialLoad();
    }
  }

  onInitialLoad = () => {
    const { searchBy, movieLoadPerPage, id } = this.props;
    movieLoadPerPage(1, searchBy, id);
  };

  onLazyLoad = () => {
    const {
      page,
      movieLoadPerPage,
      movieLoadByQuery,
      query,
      searchBy,
      id
    } = this.props;
    query
      ? movieLoadByQuery(page + 1, query)
      : movieLoadPerPage(page + 1, searchBy, id);
  };
}

const mapStateToProps = (state, ownProps) => {
  const { loading, page, error } = state.movies;
  return {
    movies: moviesSelector(state, ownProps),
    loading,

    page,
    error,
    query: state.filters.query,
    searchBy: ownProps.searchBy ? ownProps.searchBy : state.filters.searchBy,
    id: ownProps.id
  };
};

export default connect(
  mapStateToProps,
  { movieLoadPerPage, movieLoadByQuery }
)(Movies);
