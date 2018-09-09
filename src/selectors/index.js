import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

const moviesGetter = state => state.movies.entities;

export const moviesSelector = createSelector(moviesGetter, movies => {
  return mapToArr(movies);
});
