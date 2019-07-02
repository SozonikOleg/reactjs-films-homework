import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Search from '../Search';
import store from '../../../modules/store';

test('Link changes the class when hovered', () => {
  const result = renderer.create(
    <Provider store={store}>
      <Search />
    </Provider>,
  );
  expect(result).toMatchSnapshot();
});
