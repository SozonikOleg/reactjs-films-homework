/* eslint-disable import/prefer-default-export */
export const getDataTrailer = id => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d930c628f4aadc8b0b06359a9cf7230d&language=en-US`,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'POST_DATA_TRAILER', payload: response.results });
    });
};
