import search, { initialState } from '../search';
import headerData from '../headerData';
import TrailerId from '../TrailerId';

describe('tests groupe for reducers', () => {
  it('tests for search reducer', () => {
    const action = {
      type: 'GET_FILM_ITEMS',
      payload: [1, 2, 3],
    };
    expect(search(initialState, action)).toEqual([1, 2, 3]);
  });

  it('tests for headerData reducer', () => {
    const action = {
      type: 'POST_HEADER_DATA_SEARCH',
      payload: [1, 2, 3],
    };
    expect(headerData(initialState, action)).toEqual(1);
  });

  it('tests for headerData reducer', () => {
    const action = {
      type: 'POST_HEADER_DATA_ITEM',
      payload: [1, 2, 3],
    };
    expect(headerData(initialState, action)).toEqual([1, 2, 3]);
  });

  it('tests for TrailerId reducer', () => {
    const action = {
      type: 'POST_DATA_TRAILER',
      payload: [1, 2, 3],
    };
    expect(TrailerId(initialState, action)).toEqual(1);
  });

  it('tests for TrailerId reducer', () => {
    const action = {
      type: 'POST_DATA_BOOL',
      payload: [1, 2, 3],
    };
    expect(TrailerId(initialState, action)).toEqual([1, 2, 3]);
  });
});
