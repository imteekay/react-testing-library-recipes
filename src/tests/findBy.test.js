import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Queries from '../Queries';

describe('findBy', () => {
  it('paragraph is in the document', async () => {
    render(<Queries />);

    const button = screen.getByRole('button', { name: /show paragraph/i });
    fireEvent.click(button);

    const paragraph = await screen.findByText(/a paragraph/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('verify no other item', async () => {
    render(<Queries />);

    const button = screen.getByRole('button', { name: /show paragraph/i });
    fireEvent.click(button);

    try {
      await screen.findByText(/another paragraph/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});

describe('findAllBy', () => {
  it('images found', async () => {
    render(<Queries />);

    const button = screen.getByRole('button', { name: /show images/i })
    fireEvent.click(button);

    const images = await screen.findAllByRole('img');
    expect(images.length).toEqual(4);
  });


  it('verify no other texts', async () => {
    render(<Queries />);

    const button = screen.getByRole('button', { name: /show images/i })
    fireEvent.click(button);

    try {
      await screen.findByText(/another paragraph/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});
