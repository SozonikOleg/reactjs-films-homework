import urls from '../data/constants';

// eslint-disable-next-line import/prefer-default-export
const ComingSoon = () => (dispatch) => {
  const url = `${urls.themoviedb}/movie/upcoming?${urls.key}&language=en-US&page=1`;
  // eslint-disable-next-line no-undef
  return fetch(
    url,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_FILM_ITEMS', payload: response.results });
    });
};

export default ComingSoon;
