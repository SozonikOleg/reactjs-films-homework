import urls from '../data/constants';
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const getTrending = () => (dispatch) => {
  fetch(
    `${urls.themoviedb}/trending/all/day?${urls.key}`,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_FILM_ITEMS', payload: response.results });
    });
};
