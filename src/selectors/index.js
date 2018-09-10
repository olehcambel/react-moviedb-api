import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

const moviesGetter = state => state.movies.entities;
const genresGetter = state => state.genres.entities;
const idsGetter = state => state.movies.ids;

const filtersGetter = state => state.filters;
const idGetter = (_, props) => props.id;

export const moviesSelector = createSelector(
  moviesGetter,
  filtersGetter,
  idsGetter,
  (movies, filters, ids) => {
    return mapToArr(movies).filter(movie => {
      // Awful filter
      const filtered =
        filters.searchBy === 'byPopular'
          ? ids.idsPopular.includes(movie.id)
          : ids.idsQuery.includes(movie.id);

      return filtered;
    });
  }
);

export const genreSelectorRepo = () =>
  createSelector(genresGetter, idGetter, (genres, id) => genres.get(id));
