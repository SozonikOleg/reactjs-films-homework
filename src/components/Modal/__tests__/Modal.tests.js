import React from 'react';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import Modal from '../Modal';
import store from '../../../modules/store';

it('Modal renders', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(
    <Provider store={store}>
      <Modal />
    </Provider>,
  );
  expect(result).toMatchSnapshot();
});
