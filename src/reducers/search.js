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
  }
  return state;
}
