import React from 'react';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainList from '../MainList';
import store from '../../../modules/store';

it('Main renders', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(
    <Provider store={store}>
      <MainList />
    </Provider>,
  );
  expect(result).toMatchSnapshot();
});
