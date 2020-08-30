import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('using getBy query', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('title');
  expect(linkElement).toBeInTheDocument();
});
