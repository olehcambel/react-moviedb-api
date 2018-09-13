import { combineReducers } from 'redux';
import movies from './movies';
import genres from './genres';
import filters from './filters';
import ids from './ids';

export default combineReducers({ movies, genres, filters, ids });
