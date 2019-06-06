import urls from '../data/constants';

const url = `${urls.themoviedb}/movie/upcoming?${urls.key}&language=en-US&page=1`;

// eslint-disable-next-line import/prefer-default-export
export const ComingSoon = () => (dispatch) => {
  // eslint-disable-next-line no-undef
  fetch(
    url,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_FILM_ITEMS', payload: response.results });
    });
};
