import * as types from '../constants';
import { saveState, loadState } from '../localStorage';

export default store => next => action => {
  const { type, payload } = action;
  if (type === types.FAVORITE_ADD) {
    let localState = loadState();
    let oldMovies = localState.movies.favorites;
    let oldIds = localState.ids.idsFavorite;
    const newIds = oldIds.concat(payload.id);
    let newMovies = store
      .getState()
      .movies.entities.find(m => m.id === payload.id);

    saveState({
      ids: { idsFavorite: newIds },
      movies: { favorites: [...oldMovies, newMovies] }
    });

    return next({
      type,
      payload: { ids: newIds }
    });
  }
  if (type === types.FAVORITE_REMOVE) {
    let localState = loadState();
    let newMovies = localState.movies.favorites.filter(
      fav => fav.id !== payload.id
    );
    let newIds = localState.ids.idsFavorite.filter(ids => ids !== payload.id);

    saveState({
      ids: { idsFavorite: newIds },
      movies: { favorites: newMovies }
    });

    return next({
      type,
      payload: { ids: newIds }
    });
  }
  return next(action);

  // next({
  //   type: type + types.START,
  //   ...rest
  // });
};

// saveState({
//   ids: { idsFavorite: store.getState().ids.idsFavorite }
// });
