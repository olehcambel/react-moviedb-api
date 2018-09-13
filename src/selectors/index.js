import { createSelector } from 'reselect';
import { mapToArr, filterBy } from '../helpers';

const moviesGetter = state => state.movies.entities;
const genresGetter = state => state.genres.entities;
const filtersGetter = ({ filters }, props) => {
  // ugly
  if (filters.query) {
    return filters.searchBy;
  }
  return props.searchBy ? props.searchBy : filters.searchBy;
};
const idsGetter = state => state.ids;

const idGetter = (_, props) => props.id;

export const genresSelector = createSelector(genresGetter, genres => {
  return mapToArr(genres);
});

export const moviesSelector = createSelector(
  moviesGetter,
  filtersGetter,
  idsGetter,
  (movies, searchBy, ids) => {
    // есть Айдишники, Фильтр и Фильмы
    // мне нужно отфильтровать фильмы Фильтром исходя из доступных Айдишек

    let arrayToFilter = mapToArr(movies);
    let currentFilter = filterBy(searchBy, ids);
    if (!currentFilter.length || !arrayToFilter.length) {
      return [];
    }
    return arrayToFilter.filter(arr => currentFilter.includes(arr.id));
  }
);

export const genreSelectorRepo = () =>
  createSelector(genresGetter, idGetter, (genres, id) => genres.get(id));
