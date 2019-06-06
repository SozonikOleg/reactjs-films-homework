import urls from '../data/constants';

// eslint-disable-next-line import/prefer-default-export
export const getDataTrailer = id => (dispatch) => {
  const url = `${urls.themoviedb}/movie/${id}/videos?${urls.key}&language=en-US`
  // eslint-disable-next-line no-undef
  fetch(
    url,
  )
    .then(res => res.json())
    .then((response) => {
      if (!response.results[0]) {
        return dispatch({ type: 'POST_DATA_BOOL', payload: false });
      }
      return dispatch({ type: 'POST_DATA_TRAILER', payload: response.results });
    });
};
