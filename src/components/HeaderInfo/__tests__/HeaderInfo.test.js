import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import HeaderInfo from '../HeaderInfo';
import store from '../../../modules/store';

it('Header renders', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(
    <Provider store={store}>
      <HeaderInfo />
    </Provider>,
  );
  expect(result).toMatchSnapshot();
});
