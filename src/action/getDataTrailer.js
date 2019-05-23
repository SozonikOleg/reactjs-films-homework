/* eslint-disable import/prefer-default-export */
export const getDataTrailer = id => (dispatch) => {
  // eslint-disable-next-line no-undef
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d930c628f4aadc8b0b06359a9cf7230d&language=en-US`,
  )
    .then(res => res.json())
    .then((response) => {
      if (!response.results[0]) {
        return dispatch({ type: 'POST_DATA_BOOL', payload: false });
      }
      return dispatch({ type: 'POST_DATA_TRAILER', payload: response.results });
    });
};
