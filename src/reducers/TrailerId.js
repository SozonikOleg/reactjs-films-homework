const initialState = [];

export default function TrailerId(state = initialState, action) {
  if (action.type === 'POST_DATA_TRAILER') {
    return action.payload[0];
  } if (action.type === 'POST_DATA_BOOL') {
    return action.payload;
  }
  return state;
}
