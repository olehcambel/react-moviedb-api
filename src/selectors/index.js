import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

const moviesGetter = state => state.movies.entities;
const genresGetter = state => state.genres.entities;
const idGetter = (_, props) => props.id;

export const moviesSelector = createSelector(moviesGetter, movies => {
  return mapToArr(movies);
});

export const genreSelectorRepo = () =>
  createSelector(genresGetter, idGetter, (genres, id) => genres.get(id));
