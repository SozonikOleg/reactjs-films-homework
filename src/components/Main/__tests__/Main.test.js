import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import Main from '../Main';
import store from '../../../modules/store';

it('Main renders', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(
    <Provider store={store}>
      <Main />
    </Provider>,
  );
  expect(result).toMatchSnapshot();
});
