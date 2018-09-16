import * as types from '../constants';
// import { favoritesRef } from '../config/firebase';
const apiKey = process.env.REACT_APP_API_KEY;

// get movies by genre
// https://api.themoviedb.org/3/genre/28/movies?page=1&api_key=apiKey&language=en-US

export const movieLoadPerPage = (page, type, id) => dispatch => {
  if (type === 'byPopular') {
    dispatch({
      type: types.MOVIE_LOAD_PER_PAGE,
      callAPI: `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${apiKey}&language=en-US`
    });
  }

  if (type === 'byGenre') {
    dispatch({
      type: types.MOVIE_LOAD_BY_GENRE,
      callAPI: `https://api.themoviedb.org/3/genre/${id}/movies?page=${page}&api_key=${apiKey}&language=en-US`,
      payload: { page, id }
    });
  }

  dispatch(genreLoadAll());
};

export const movieLoadByQuery = (page, query) => ({
  type: types.MOVIE_LOAD_BY_QUERY,
  callAPI: `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${apiKey}&language=en-US`,
  payload: { page, query }
});

export const genreLoadAll = () => (dispatch, getState) => {
  const { genres } = getState();
  if (genres.loading || genres.loaded) return;
  dispatch({
    type: types.GENRE_LOAD_ALL,
    callAPI: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  });
};

export const filterSetDefault = () => ({
  type: types.FILTER_SET_DEFAULT
});

export const favoriteAdd = id => ({
  type: types.FAVORITE_ADD,
  payload: { id }
});

export const favoriteRemove = id => ({
  type: types.FAVORITE_REMOVE,
  payload: { id }
});

//Firebase
// export const favoriteAdd = id => async dispatch => {
//   debugger;
//   favoritesRef.push().set(id);
// };

// export const favoriteRemove = id => async dispatch => {
//   favoritesRef.child(id).remove();
// };

// export const favoriteFetch = () => async dispatch => {
//   favoritesRef.on('value', snapshot => {
//     dispatch({
//       type: types.FAVORITE_FETCH,
//       payload: snapshot.val()
//     });
//   });
// };
