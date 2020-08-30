import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('getBy', () => {
  it('title is in the document', () => {
    render(<App />);

    const title = screen.getByText(/title/i);

    expect(title).toBeInTheDocument();
  });

  it('verify no element', () => {
    render(<App />);

    try {
      screen.getByText(/subtitle/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});

describe('getAllBy', () => {
  it('items are in the document', () => {
    render(<App />);

    const items = screen.getAllByTestId(/list-item/i);

    expect(items[0].textContent).toEqual('Item 1');
    expect(items[1].textContent).toEqual('Item 2');
    expect(items[2].textContent).toEqual('Item 3');
    expect(items[3].textContent).toEqual('Item 4');
    expect(items.length).toEqual(4);
  });

  it('verify no other item', () => {
    render(<App />);

    try {
      screen.getAllByTestId(/other-item/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });
});

describe('queryBy', () => {
  it('title is in the document', () => {
    render(<App />);

    const title = screen.queryByText(/title/i);

    expect(title).toBeInTheDocument();
  });

  it('verify no element', () => {
    render(<App />);

    const subtitle = screen.queryByText(/subtitle/i);

    expect(subtitle).not.toBeInTheDocument();
  });
});

describe('queryAllBy', () => {
  it('items are in the document', () => {
    render(<App />);

    const items = screen.queryAllByTestId(/list-item/i);

    expect(items[0].textContent).toEqual('Item 1');
    expect(items[1].textContent).toEqual('Item 2');
    expect(items[2].textContent).toEqual('Item 3');
    expect(items[3].textContent).toEqual('Item 4');
    expect(items.length).toEqual(4);
  });

  it('verify no other item', () => {
    render(<App />);

    const otherItems = screen.queryAllByTestId(/other-item/i);

    expect(otherItems.length).toEqual(0);
  });
});

describe('findBy', () => {
  it('paragraph is in the document', async () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /show paragraph/i });
    fireEvent.click(button);

    const paragraph = await screen.findByText(/a paragraph/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('verify no other item', async () => {
    render(<App />);

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
    render(<App />);

    const button = screen.getByRole('button', { name: /show images/i })
    fireEvent.click(button);

    const images = await screen.findAllByRole('img');
    expect(images.length).toEqual(4);
  });


  it('verify no other texts', async () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /show images/i })
    fireEvent.click(button);

    try {
      await screen.findByText(/another paragraph/i);
    } catch (e) {
      console.log('Did not find nonexistent element');
    }
  });

});
