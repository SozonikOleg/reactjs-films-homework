const initialState = [];

export default function search(state = initialState, action) {
  if (action.type === 'POST_SEARCH_VALUE') {
    return action.payload;
  } if (action.type === 'POST_HEADER_DATA_TRENDING') {
    return action.payload;
  }
  return state;
}
