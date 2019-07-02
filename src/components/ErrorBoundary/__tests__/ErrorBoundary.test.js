import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ErrorBoundary from '../ErrorBoundary';

it('ErrorBoundary renders', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<ErrorBoundary />);
  expect(result).toMatchSnapshot();
});
