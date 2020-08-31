import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Form } from '../Form';

describe('Form', () => {
  it('fills form', () => {
    render(<Form />);

    const nameInput = screen.getByLabelText(/name/i);
    const ageInput = screen.getByLabelText(/age/i);
    const birthdayInput = screen.getByLabelText(/birthday/i);

    const codingCheckbox = screen.getByLabelText(/coding/i);
    const readingCheckbox = screen.getByLabelText(/reading/i);
    const writingCheckbox = screen.getByLabelText(/writing/i);

    const osRadio = screen.getByLabelText(/mac/i);

    const favCitySelect = screen.getByTestId(/favcity/i);
    const tokyoOption = screen.getByText(/tokyo/i);

    const countriesMultiSelect = screen.getByTestId(/countries/i);
    const japanOption = screen.getByText(/japan/i);
    const germanyOption = screen.getByText(/germany/i);
    const netherlandsOption = screen.getByText(/netherlands/i);

    const button = screen.getByRole('button', { name: /submit/i })

    userEvent.type(nameInput, 'TK');
    userEvent.type(ageInput, '24');
    userEvent.type(birthdayInput, '01/01/1996');

    userEvent.click(codingCheckbox);
    userEvent.click(readingCheckbox);
    userEvent.click(writingCheckbox);

    userEvent.click(osRadio);

    userEvent.selectOptions(favCitySelect, [tokyoOption]);
    userEvent.selectOptions(countriesMultiSelect, [japanOption, germanyOption, netherlandsOption]);

    userEvent.click(button);
  });
});
