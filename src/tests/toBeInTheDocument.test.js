import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from '../Content';

describe('toBeInTheDocument', () => {
  it('title is in the document', () => {
    render(<Content />);

    const title = screen.getByText(/title/i);

    expect(title).toBeInTheDocument();
  });

  it('paragraph is in the document', () => {
    render(<Content />);

    const paragraph = screen.getByText(/a paragraph to be tested/i);

    expect(paragraph).toBeInTheDocument();
  });

  it('verify no element', () => {
    render(<Content />);

    const subtitle = screen.queryByText(/subtitle/i);

    expect(subtitle).not.toBeInTheDocument();
  });
});
