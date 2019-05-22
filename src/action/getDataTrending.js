/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const getHeaderData = () => (dispatch) => {
  fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=d930c628f4aadc8b0b06359a9cf7230d',
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'POST_HEADER_DATA_TRENDING', payload: response.results });
    });
};
