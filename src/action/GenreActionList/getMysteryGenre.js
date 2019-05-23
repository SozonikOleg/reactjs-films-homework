/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const getMysteryGenre = () => (dispatch) => {
  fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=d930c628f4aadc8b0b06359a9cf7230d&with_genres=9648',
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_GENRE_MYSTERY', payload: response.results });
    });
};
