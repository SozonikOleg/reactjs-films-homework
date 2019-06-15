import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Modal from '../Modal';
import store from '../../../modules/store';

it('рендер и обновление счётчика', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Modal />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
