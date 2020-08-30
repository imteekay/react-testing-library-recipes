import React from 'react';
import { render, screen } from '@testing-library/react';
import Queries from '../Queries';

describe('queryBy', () => {
  it('title is in the document', () => {
    render(<Queries />);

    const title = screen.queryByText(/title/i);

    expect(title).toBeInTheDocument();
  });

  it('verify no element', () => {
    render(<Queries />);

    const subtitle = screen.queryByText(/subtitle/i);

    expect(subtitle).not.toBeInTheDocument();
  });
});

describe('queryAllBy', () => {
  it('items are in the document', () => {
    render(<Queries />);

    const items = screen.queryAllByTestId(/list-item/i);

    expect(items[0].textContent).toEqual('Item 1');
    expect(items[1].textContent).toEqual('Item 2');
    expect(items[2].textContent).toEqual('Item 3');
    expect(items[3].textContent).toEqual('Item 4');
    expect(items.length).toEqual(4);
  });

  it('verify no other item', () => {
    render(<Queries />);

    const otherItems = screen.queryAllByTestId(/other-item/i);

    expect(otherItems.length).toEqual(0);
  });
});
