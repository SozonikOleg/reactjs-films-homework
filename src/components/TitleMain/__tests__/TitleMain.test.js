import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import TitleMain from '../TitleMain';
import store from '../../../modules/store';

it('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Provider store={store}>
      <TitleMain />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
