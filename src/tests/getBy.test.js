import React from 'react';
import { render, screen } from '@testing-library/react';
import Queries from '../Queries';

describe('getBy', () => {
  it('title is in the document', () => {
    render(<Queries />);

    const title = screen.getByText(/title/i);

    expect(title).toBeInTheDocument();
  });

  it('verify no element', () => {
    render(<Queries />);

    try {
      screen.getByText(/subtitle/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});

describe('getAllBy', () => {
  it('items are in the document', () => {
    render(<Queries />);

    const items = screen.getAllByTestId(/list-item/i);

    expect(items[0].textContent).toEqual('Item 1');
    expect(items[1].textContent).toEqual('Item 2');
    expect(items[2].textContent).toEqual('Item 3');
    expect(items[3].textContent).toEqual('Item 4');
    expect(items.length).toEqual(4);
  });

  it('verify no other item', () => {
    render(<Queries />);

    try {
      screen.getAllByTestId(/other-item/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});
