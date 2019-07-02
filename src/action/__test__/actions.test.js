import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';// заглушка на асинхрн.запрос
import urls from '../../data/constants';

import getGenre from '../getGenre';
import ComingSoon from '../getComingSoon';
import getDataTrailer from '../getDataTrailer';
import getHeaderData from '../getHeaderData';
import getHeaderItem from '../getHeaderDataItem';
import getTopRated from '../getTopRated';
import getTrending from '../getTrending';
import getSearchData from '../search';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions groupe', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('', () => {
    fetchMock.getOnce(`${urls.themoviedb}/discover/movie?${urls.key}&with_genres=undefined`, { results: [1, 2, 3] });
    const expectActions = [{
      type: 'GET_FILM_ITEMS',
      payload: [1, 2, 3],
    }];
    const store = mockStore({});

    return store.dispatch(getGenre()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expectActions);
    });
  });

  it('', () => {
    fetchMock.getOnce(`${urls.themoviedb}/movie/upcoming?${urls.key}&language=en-US&page=1`, { results: [1, 2, 3] });
    const expectActions = [{
      type: 'GET_FILM_ITEMS',
      payload: [1, 2, 3],
    }];
    const store = mockStore({});

    return store.dispatch(ComingSoon()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expectActions);
    });
  });

  it('', () => {
    fetchMock.getOnce(`${urls.themoviedb}/movie/undefined/videos?${urls.key}&language=en-US`, { results: [1, 2, 3] });
    const expectActions = [{
      type: 'POST_DATA_TRAILER',
      payload: [1, 2, 3],
    }];
    const store = mockStore({});

    return store.dispatch(getDataTrailer()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expectActions);
    });
  });

  it('', () => {
    const url1 = 'language=en-US&query=undefined&page=1&include_adult=false';
    const url2 = `${urls.themoviedb}/search/movie?${urls.key}&${url1}`;
    fetchMock.getOnce(url2, { results: [1, 2, 3] });
    const expectActions = [{
      type: 'POST_HEADER_DATA_SEARCH',
      payload: [1, 2, 3],
    }];
    const store = mockStore({});

    return store.dispatch(getHeaderData()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expectActions);
    });
  });

  it('', () => {
    const expectedAction = { type: 'POST_HEADER_DATA_ITEM', payload: undefined };
    const store = mockStore({});
    const result = store.dispatch(getHeaderItem());
    expect(result).toEqual(expectedAction);
  });

  it('', () => {
    const url1 = `${urls.themoviedb}/movie/top_rated?${urls.key}&language=en-US&page=1`;
    fetchMock.getOnce(url1, { results: [1, 2, 3] });
    const expectActions = [{
      type: 'GET_FILM_ITEMS',
      payload: [1, 2, 3],
    }];
    const store = mockStore({});

    return store.dispatch(getTopRated()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expectActions);
    });
  });

  it('', () => {
    const url1 = `${urls.themoviedb}/trending/all/day?${urls.key}`;
    fetchMock.getOnce(url1, { results: [1, 2, 3] });
    const expectActions = [{
      type: 'GET_FILM_ITEMS',
      payload: [1, 2, 3],
    }];
    const store = mockStore({});

    return store.dispatch(getTrending()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expectActions);
    });
  });

  it('', () => {
    const url1 = `${urls.themoviedb}/search/movie?${urls.key}&language=en-US&query=undefined&page=1&include_adult=false`;
    fetchMock.getOnce(url1, { results: [1, 2, 3] });
    const expectActions = [{
      type: 'GET_FILM_ITEMS',
      payload: [1, 2, 3],
    }];
    const store = mockStore({});

    return store.dispatch(getSearchData()).then(() => {
      const result = store.getActions();
      expect(result).toEqual(expectActions);
    });
  });
});
