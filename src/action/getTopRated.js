// eslint-disable-next-line import/prefer-default-export
export const getTopRated = () => (dispatch) => {
  // eslint-disable-next-line no-undef
  fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=d930c628f4aadc8b0b06359a9cf7230d&language=en-US&page=1',
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_TOP_RAITED', payload: response.results });
    });
};
