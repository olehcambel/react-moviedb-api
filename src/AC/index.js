import * as types from '../constants';
const apiKey = process.env.REACT_APP_API_KEY;

// export function movieLoadPerPage(page) {
//   return {
//     type: types.MOVIE_LOAD_PER_PAGE,
//     callAPI: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`,
//     //походу не нужен пейлоад ??
//     payload: { page }
//   };
// }

export function filterSetDefault() {
  return { type: types.FILTER_SET_DEFAULT };
}

export function movieLoadByQuery(page, query) {
  return {
    type: types.MOVIE_LOAD_BY_QUERY,
    callAPI: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`,
    payload: { page, query }
  };
}

export function movieLoadPerPage(page) {
  return (dispatch, getState) => {
    const { genres } = getState();

    dispatch({
      type: types.MOVIE_LOAD_PER_PAGE,
      callAPI: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    });
    // не уверен, но скорее всего так делать не правильно
    // в плане нужно экшены синхронно выполнять, а не асинк
    // просто проблема в том, что для Муви мне нужно именно 2 апи-рек сделать
    if (genres.loading || genres.loaded) return;
    dispatch({
      type: types.GENRE_LOAD_ALL,
      callAPI: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    });
  };
}
