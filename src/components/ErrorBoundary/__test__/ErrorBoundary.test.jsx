import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../ErrorBoundary';

it('renders correctly', () => {
  const component = renderer
    .create(<ErrorBoundary />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.toggleModal();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
