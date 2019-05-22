/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const getHeaderData = data => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=d930c628f4aadc8b0b06359a9cf7230d&language=en-US&query=${data}&page=1&include_adult=false`,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'POST_HEADER_DATA_SEARCH', payload: response.results });
    });
};
