import * as types from '../constants';
import { Record, OrderedMap } from 'immutable';
import { arrToMap, mapMovies, objMovie } from '../helpers';
import { loadState } from '../localStorage';

const MoviesRecord = Record({
  id: null,
  title: null,
  overview: null,
  backdropPath: null,
  genreIds: [],
  releaseDate: null,
  voteAverage: 0,
  voteCount: 0,
  runtime: 0,

  posterPath: null,
  genres: [],
  status: null,
  tagline: null,
  trailer: {}
});

const locale = loadState();
const ReducerState = new Record({
  entities: new OrderedMap(
    !locale || !locale.movies
      ? {}
      : arrToMap(locale.movies.favorites, MoviesRecord)
  ), // хранятся все
  loading: false,
  page: null,
  error: null
});

const defaultState = new ReducerState();

export default (moviesState = defaultState, action) => {
  const { response, type } = action;
  let mapResult;

  switch (type) {
    case types.MOVIE_LOAD_PER_PAGE + types.START:
      return moviesState.set('loading', true);

    case types.MOVIE_LOAD_PER_PAGE + types.SUCCESS:
      mapResult = mapMovies(response.results);
      return moviesState
        .mergeIn(['entities'], arrToMap(mapResult, MoviesRecord))
        .set('page', response.page)
        .set('loading', false)
        .set('error', null);

    case types.MOVIE_LOAD_PER_PAGE + types.FAIL:
      return moviesState.set('error', response.message).set('loading', false);

    case types.MOVIE_LOAD_BY_QUERY + types.START:
      return moviesState.set('loading', true);

    case types.MOVIE_LOAD_BY_QUERY + types.SUCCESS:
      mapResult = mapMovies(response.results);
      return moviesState
        .mergeIn(['entities'], arrToMap(mapResult, MoviesRecord))
        .set('page', response.page)
        .set('loading', false)
        .set('error', null);

    case types.MOVIE_LOAD_BY_QUERY + types.FAIL:
      return moviesState.set('error', response.message).set('loading', false);

    case types.MOVIE_LOAD_BY_GENRE + types.START:
      return moviesState.set('loading', true);

    case types.MOVIE_LOAD_BY_GENRE + types.SUCCESS:
      mapResult = mapMovies(response.results);
      return moviesState
        .mergeIn(['entities'], arrToMap(mapResult, MoviesRecord))
        .set('page', response.page)
        .set('loading', false)
        .set('error', null);

    case types.MOVIE_LOAD_BY_ID + types.START:
      return moviesState.set('loading', true);

    case types.MOVIE_LOAD_BY_ID + types.SUCCESS:
      let objResult = objMovie(response);

      //ПЕРЕЗАПИСЫВАЕТ, А ДОЛЖНО ПРОСТО ОБНОВЛЯТЬ null
      return moviesState
        .setIn(['entities', response.id], new MoviesRecord(objResult))
        .set('loading', false);

    // id: null,
    // title: null,
    // overview: null,
    // genreIds: [],
    // posterPath: null,
    // releaseDate: null,
    // voteAverage: 0,
    // voteCount: 0,

    // backdropPath: null,
    // genres: [],
    // status: null,
    // tagline: null

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
