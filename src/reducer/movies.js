import * as types from '../constants';
import { Record, OrderedMap } from 'immutable';
import { arrToMap, mapMovies } from '../helpers';

const MoviesRecord = Record({
  id: undefined,
  title: undefined,
  overview: undefined,
  genreIds: [],
  posterPath: undefined,
  releaseDate: undefined,
  voteAverage: 0
});

const ReducerState = new Record({
  entities: new OrderedMap({}), // хранятся все
  ids: { idsPopular: [], idsQuery: [] },
  loading: false,
  loaded: false,
  page: null
  // query: ''
});

const defaultState = new ReducerState();

export default (moviesState = defaultState, action) => {
  const { response, payload } = action;
  let mapResult;

  switch (action.type) {
    case types.MOVIE_LOAD_PER_PAGE + types.START:
      return moviesState.set('loading', true).set('loaded', false);

    case types.MOVIE_LOAD_PER_PAGE + types.SUCCESS:
      mapResult = mapMovies(response.results);
      return moviesState
        .mergeIn(['entities'], arrToMap(mapResult, MoviesRecord))
        .set('page', response.page)
        .set('loading', false)
        .set('loaded', true)

        .set('ids', {
          ...moviesState.ids,
          idsPopular: [
            ...moviesState.ids.idsPopular,
            ...mapResult.map(r => r.id)
          ]
        });

    case types.FILTER_SET_DEFAULT:
      return moviesState.set('ids', {
        ...moviesState.ids,
        idsQuery: []
      });

    case types.MOVIE_LOAD_BY_QUERY + types.START:
      return moviesState
        .set('loading', true)
        .set('loaded', false)

        .set('ids', {
          ...moviesState.ids,
          idsQuery: payload.page === 1 ? [] : [...moviesState.ids.idsQuery]
        });

    case types.MOVIE_LOAD_BY_QUERY + types.SUCCESS:
      mapResult = mapMovies(response.results);
      return moviesState
        .mergeIn(['entities'], arrToMap(mapResult, MoviesRecord))
        .set('page', response.page)
        .set('loading', false)
        .set('loaded', true)
        .set('ids', {
          ...moviesState.ids,
          idsQuery: [...moviesState.ids.idsQuery, ...mapResult.map(r => r.id)]
        });
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
