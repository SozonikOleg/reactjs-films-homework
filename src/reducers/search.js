export const initialState = [];

export default function search(state = initialState, action) {
  if (action.type === 'GET_FILM_ITEMS') {
    return action.payload;
  }
  return state;
}
