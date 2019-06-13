import urls from '../data/constants';

// eslint-disable-next-line import/prefer-default-export
const getGenre = id => (dispatch) => {
  const url = `${urls.themoviedb}/discover/movie?${urls.key}&with_genres=${id}`;
  // eslint-disable-next-line no-undef
  return fetch(
    url,
  )
    .then(res => res.json())
    .then((response) => {
      dispatch({ type: 'GET_FILM_ITEMS', payload: response.results });
    });
};

export default getGenre;
