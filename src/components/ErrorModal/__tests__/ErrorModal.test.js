import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import ErrorModal from '../ErrorModal';
import store from '../../../modules/store';

it('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Provider store={store}>
      <ErrorModal />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
