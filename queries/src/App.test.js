import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('getBy', () => {
  it('get the title', () => {
    render(<App />);
    const linkElement = screen.getByTestId('title');
    expect(linkElement).toBeInTheDocument();
  });

  it('verify no element', () => {
    render(<App />);

    try {
      screen.getByTestId('subtitle');
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});
