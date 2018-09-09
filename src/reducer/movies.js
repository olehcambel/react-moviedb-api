import * as types from '../constants';
import { Record, OrderedMap } from 'immutable';
import { arrToMap } from '../helpers';

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
  // pagination -> page<Int> -> loading, loaded, ids
  // pagination -> ids, page<Int> -> loading, loaded
  // pagination: new Map({}),
  // я не знаю где указать лоадинг,
  // что конкреная страница грузится, но при этом айдишники в одном месте
  entities: new OrderedMap({}), // хранятся все фильмы
  loading: false,
  loaded: false,
  page: null,
  total: null
});

const defaultState = new ReducerState();

export default (moviesState = defaultState, action) => {
  const { response } = action;

  switch (action.type) {
    case types.MOVIE_LOAD_PER_PAGE + types.START:
      // action.payload.page
      return moviesState.set('loading', true).set('loaded', false);

    case types.MOVIE_LOAD_PER_PAGE + types.SUCCESS:
      const mapResult = response.results.map(
        ({
          id,
          title,
          overview,
          genre_ids,
          poster_path,
          release_date,
          vote_average
        }) => ({
          id,
          title,
          overview,
          genreIds: genre_ids,
          posterPath: poster_path,
          releaseDate: release_date,
          voteAverage: vote_average
        })
      );
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
