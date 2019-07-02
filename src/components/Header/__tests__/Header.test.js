import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Header from '../Header';
import store from '../../../modules/store';

test('MovieItem ', () => {
  const result = renderer.create(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
  expect(result).toMatchSnapshot();
});
