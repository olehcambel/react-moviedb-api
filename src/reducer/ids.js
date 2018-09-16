import * as types from '../constants';
import { Record } from 'immutable';
import { loadState } from '../localStorage';

const locale = loadState();

const ReducerState = new Record({
  idsPopular: [],
  idsQuery: [],
  idsFavorite: !locale || !locale.ids ? [] : locale.ids.idsFavorite,
  idsGenre: [] // в общем придется при каждом жанре перезаписывать предыдущий -_-
});

const defaultState = new ReducerState();

export default (idsState = defaultState, action) => {
  const { type, payload, response } = action;

  switch (type) {
    case types.MOVIE_LOAD_PER_PAGE + types.SUCCESS:
      return idsState.set('idsPopular', [
        ...idsState.idsPopular,
        ...response.results.map(r => r.id)
      ]);

    case types.MOVIE_LOAD_BY_QUERY + types.START:
      return payload.page === 1 ? idsState.set('idsQuery', []) : idsState;

    case types.MOVIE_LOAD_BY_QUERY + types.SUCCESS:
      return idsState.set('idsQuery', [
        ...idsState.idsQuery,
        ...response.results.map(r => r.id)
      ]);

    case types.MOVIE_LOAD_BY_GENRE + types.START:
      return payload.page === 1 ? idsState.set('idsGenre', []) : idsState;

    case types.MOVIE_LOAD_BY_GENRE + types.SUCCESS:
      return idsState.set('idsGenre', [
        ...idsState.idsGenre,
        ...response.results.map(r => r.id)
      ]);

    case types.FAVORITE_ADD:
      return idsState.set('idsFavorite', payload.ids);

    case types.FAVORITE_REMOVE:
      return idsState.set('idsFavorite', payload.ids);

    default:
      return idsState;
  }
};
