import { combineReducers } from 'redux';
import movies from './movies';
import genres from './genres';
import filters from './filters';
export default combineReducers({ movies, genres, filters });
