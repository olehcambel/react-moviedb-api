import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import logger from './middlewares/logger';
import api from './middlewares/api';
import local from './middlewares/local';
import thunk from 'redux-thunk';
import { saveState, loadState } from './localStorage';

const locale = loadState();
if (!locale || !locale.movies || !locale.ids) {
  saveState({
    ids: { idsFavorite: [] },
    movies: { favorites: [] }
  });
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer /* persistedState, */,
  composeEnhancers(applyMiddleware(thunk, api, local, logger))
);

// store.subscribe(
//   debounce(() => {
//     saveState({
//       ids: { idsFavorite: store.getState().ids.idsFavorite }
//     });
//   }, 2500)
// );

// dev only
window.store = store;
export default store;
