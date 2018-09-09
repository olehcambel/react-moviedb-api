import * as types from '../constants';
const apiKey = process.env.REACT_APP_API_KEY;

export function movieLoadPerPage(page) {
  return {
    type: types.MOVIE_LOAD_PER_PAGE,
    callAPI: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`,
    //походу не нужен пейлоад ??
    payload: { page }
  };
}
