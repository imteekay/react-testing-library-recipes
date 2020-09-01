import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading', () => {
  it('renders the loading and then the pokemon info', async () => {
    const data = { name: 'charmander', types: [{ type: { name: 'fire' } }] };
    fetch.once(JSON.stringify(data));

    render(<Loading pokemon="charmander" />);

    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();

    const charmander = await screen.findByText('Name: charmander');
    const charmanderSkills = await screen.findByText('Skills: fire');

    expect(charmander).toBeInTheDocument();
    expect(charmanderSkills).toBeInTheDocument();
  });

  it('renders the error', async () => {
    fetch.mockReject(() => Promise.reject('API is down'));

    render(<Loading pokemon="charmander" />);

    const error = await screen.findByText('Error!');
    expect(error).toBeInTheDocument();
  });
});
