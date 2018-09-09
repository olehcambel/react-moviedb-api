import * as types from '../constants';
import { Record, OrderedMap } from 'immutable';
import { arrToMap } from '../helpers';

const GenresRecord = Record({
  id: undefined,
  name: undefined
});

const ReducerState = new Record({
  entities: new OrderedMap({}), // хранятся все жанры
  loading: false,
  loaded: false,
  total: null
});

const defaultState = new ReducerState();

export default (genresState = defaultState, action) => {
  const { response } = action;

  switch (action.type) {
    case types.GENRE_LOAD_ALL + types.START:
      return genresState.set('loading', true);

    case types.GENRE_LOAD_ALL + types.SUCCESS:
      return genresState
        .mergeIn(['entities'], arrToMap(response.genres, GenresRecord))
        .set('loading', false)
        .set('loaded', true);

    default:
      return genresState;
  }
};
