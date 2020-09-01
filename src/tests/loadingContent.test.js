import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading', () => {
  it('renders loading and then the pokemon info', async () => {
    render(<Loading pokemon="charmander" />);

    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();

    const charmander = await screen.findByText('Name: charmander');
    const charmanderSkills = await screen.findByText('Skills: fire');

    expect(charmander).toBeInTheDocument();
    expect(charmanderSkills).toBeInTheDocument();
  });
});
