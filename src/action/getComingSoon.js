
const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d930c628f4aadc8b0b06359a9cf7230d&language=en-US&page=1';

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
