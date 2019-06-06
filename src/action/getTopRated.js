import urls from '../data/constants';
// eslint-disable-next-line import/prefer-default-export
export const getTopRated = () => (dispatch) => {
  // eslint-disable-next-line no-undef
  fetch(
    `${urls.themoviedb}/movie/top_rated?${urls.key}&language=en-US&page=1`,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_FILM_ITEMS', payload: response.results });
    });
};
