const initialState = [];

export default function search(state = initialState, action) {
  if (action.type === 'POST_SEARCH_VALUE') {
    return action.payload;
  } if (action.type === 'GET_DATA_TRENDING') {
    return action.payload;
  } if (action.type === 'GET_TOP_RAITED') {
    return action.payload;
  } if (action.type === 'GET_DATA_COMING_SOON') {
    return action.payload;
  } if (action.type === 'GET_GENRE_ACTION') {
    return action.payload;
  } if (action.type === 'GET_GENRE_ADVENTURE') {
    return action.payload;
  } if (action.type === 'GET_GENRE_ANIMATION') {
    return action.payload;
  } if (action.type === 'GET_GENRE_COMEDY') {
    return action.payload;
  } if (action.type === 'GET_GENRE_CRIME') {
    return action.payload;
  } if (action.type === 'GET_GENRE_DOCUMENTARY') {
    return action.payload;
  } if (action.type === 'GET_GENRE_DRAMA') {
    return action.payload;
  } if (action.type === 'GET_GENRE_FAMILY') {
    return action.payload;
  } if (action.type === 'GET_GENRE_HISTORY') {
    return action.payload;
  } if (action.type === 'GET_GENRE_HORROR') {
    return action.payload;
  } if (action.type === 'GET_GENRE_MUSIC') {
    return action.payload;
  } if (action.type === 'GET_GENRE_MYSTERY') {
    return action.payload;
  } if (action.type === 'GET_GENRE_ROMANCE') {
    return action.payload;
  } if (action.type === 'GET_GENRE_SCIENCE_FUNCTION') {
    return action.payload;
  } if (action.type === 'GET_GENRE_TV_MOVIE') {
    return action.payload;
  } if (action.type === 'GET_GENRE_THRILLER') {
    return action.payload;
  } if (action.type === 'GET_GENRE_WAR') {
    return action.payload;
  } if (action.type === 'GET_GENRE_WESTERN') {
    return action.payload;
  }
  return state;
}
