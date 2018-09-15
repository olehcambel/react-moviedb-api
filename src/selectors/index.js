import { createSelector } from 'reselect';
import { mapToArr, filterBy } from '../helpers';

const moviesGetter = state => state.movies.entities;
const genresGetter = state => state.genres.entities;
const idsStateGetter = state => state.ids;
const propsGetter = (_, props) => props;

const filtersGetter = ({ filters }, props) => {
  // ugly
  if (filters.query) {
    return filters.searchBy;
  }
  return props.searchBy ? props.searchBy : filters.searchBy;
};

export const moviesSelector = createSelector(
  moviesGetter,
  filtersGetter,
  idsStateGetter,
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

export const genresSelector = createSelector(
  genresGetter,
  propsGetter,
  (genres, { ids, all }) => {
    let mappedGenres = mapToArr(genres);
    if (!mappedGenres.length) {
      return [];
    }
    return mappedGenres.filter(arr => (all ? arr : ids.includes(arr.id)));
  }
);

// export const genreSelectorRepo = () => {
//   debugger;
//   return createSelector(genresGetter, idGetter, (genres, genreIds) => {
//     debugger;
//     return genres.get(genreIds);
//   });
// };
