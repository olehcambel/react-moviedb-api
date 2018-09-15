import * as types from '../constants';
import { Record, OrderedMap } from 'immutable';
import { arrToMap, mapMovies } from '../helpers';
import { loadState } from '../localStorage';

const MoviesRecord = Record({
  id: undefined,
  title: undefined,
  overview: undefined,
  genreIds: [],
  posterPath: undefined,
  releaseDate: undefined,
  voteAverage: 0
});

const locale = loadState();
const ReducerState = new Record({
  entities: new OrderedMap(
    !locale || !locale.movies
      ? {}
      : arrToMap(locale.movies.favorites, MoviesRecord)
  ), // хранятся все
  loading: false,
  loaded: false,
  page: null
  // query: ''
});

const defaultState = new ReducerState();

export default (moviesState = defaultState, action) => {
  const { response, type } = action;
  let mapResult;

  switch (type) {
    case types.MOVIE_LOAD_PER_PAGE + types.START:
      return moviesState.set('loading', true).set('loaded', false);

    case types.MOVIE_LOAD_PER_PAGE + types.SUCCESS:
      mapResult = mapMovies(response.results);
      return moviesState
        .mergeIn(['entities'], arrToMap(mapResult, MoviesRecord))
        .set('page', response.page)
        .set('loading', false)
        .set('loaded', true);

    case types.MOVIE_LOAD_BY_QUERY + types.START:
      return moviesState.set('loading', true).set('loaded', false);

    case types.MOVIE_LOAD_BY_QUERY + types.SUCCESS:
      mapResult = mapMovies(response.results);
      return moviesState
        .mergeIn(['entities'], arrToMap(mapResult, MoviesRecord))
        .set('page', response.page)
        .set('loading', false)
        .set('loaded', true);

    // action.payload.page

    // action.response.page
    // action.response.total_pages
    // action.response.total_results
    // action.response.results
    /**
     * adult Boolean
     * backdrop_path String
     * genre_ids Array(Int)
     * id Int
     * original_language String
     * original_title String
     * overview String
     * popularity Int
     * poster_path String
     * release_date Date
     * title String
     * video Boolean
     * vote_average Int
     * vote_count Int
     */
    default:
      return moviesState;
  }
};

/**
 * {hello: [], bye: []}
 */
