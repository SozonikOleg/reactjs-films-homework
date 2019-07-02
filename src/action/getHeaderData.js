import urls from '../data/constants';

/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
const getHeaderData = data => (dispatch) => {
  const url = `${urls.themoviedb}/search/movie?${urls.key}&language=en-US&query=${data}&page=1&include_adult=false`;
  return fetch(
    url,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'POST_HEADER_DATA_SEARCH', payload: response.results });
    });
};

export default getHeaderData;
