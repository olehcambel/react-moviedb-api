import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from './middlewares/logger';
import api from './middlewares/api';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, api, logger);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

// dev only

window.store = store;
export default store;
