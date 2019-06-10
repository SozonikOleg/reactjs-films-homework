import React from 'react';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import ErrorModal from '../ErrorModal';
import store from '../../../modules/store';

it('ErrorModal renders', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(
    <Provider store={store}>
      <ErrorModal />
    </Provider>,
  );
  expect(result).toMatchSnapshot();
});
