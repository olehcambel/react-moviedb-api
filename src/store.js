import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from './middlewares/logger';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, logger);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

window.store = store;
export default store;
