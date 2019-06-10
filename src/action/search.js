import urls from '../data/constants';
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const getSearchData = data => (dispatch) => {
  fetch(
    `${urls.themoviedb}/search/movie?${urls.key}&language=en-US&query=${data}&page=1&include_adult=false`,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_FILM_ITEMS', payload: response.results });
    });
};
