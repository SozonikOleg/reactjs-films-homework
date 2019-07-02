import urls from '../data/constants';
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
const getTrending = () => (dispatch) => {
  const url = `${urls.themoviedb}/trending/all/day?${urls.key}`;
  return fetch(
    url,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_FILM_ITEMS', payload: response.results });
    });
};


export default getTrending;
