import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducer';

import logger from './middlewares/logger';
import api from './middlewares/api';
import local from './middlewares/local';
import { saveState, loadState } from './localStorage';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, api, local, logger, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

// FUCKING LOCALE STORAGE.. REALLY !!
// I DONT KNOW WHERE TO PUT IT. IT DOESNT SEEM TO BE IN THE STOER

const locale = loadState();
if (!locale || !locale.movies || !locale.ids) {
  saveState({
    ids: { idsFavorite: [] },
    movies: { favorites: [] }
  });
}
