import mock from '../components/mock';

const initialState = mock;

export default function headerData(state = initialState, action) {
  if (action.type === 'POST_HEADER_DATA_SEARCH') {
    return action.payload[0];
  } if (action.type === 'POST_HEADER_DATA_ITEM') {
    return action.payload;
  }
  return state;
}
