import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

it('ErrorBoundary renders', () => {
  const props = {
    location: { search: '' },
  };
  const renderer = new ShallowRenderer();
  const result = renderer.render(
    <App {...props} />,
  );
  expect(result).toMatchSnapshot();
});
