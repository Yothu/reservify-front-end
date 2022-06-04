import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  prettyDOM,
  fireEvent,
  act,
} from '@testing-library/react';
import LogIn from '../pages/Registration/LogIn';

describe('<Log In />', () => {
  let component;
  let emailField;
  let passwordField;
  let submitBtn;

  const mockEmail = 'abc';

  beforeEach(() => {
    component = render(<LogIn />);
    emailField = component.container.querySelector("input[name='email']");
    passwordField = component.container.querySelector("input[name='password']");
    submitBtn = component.getByRole('button', { name: /submit/i });
  });

  test('renders form corrently', () => {
    component.getByText('Log In');
    component.getByLabelText('Email', { exact: false });
    component.getByLabelText('Password');
    component.getByRole('button', { name: /submit/i });
  });

  test('if email field is empty on submit, renders "email required"', async () => {
    await act(async () => {
      fireEvent.submit(submitBtn);
    });

    component.getByText('Email is required', { exact: false });
  });

  test('should display correct error message for email miss match', async () => {
    await act(async () => {
      fireEvent.input(emailField, { target: { value: mockEmail } });
      fireEvent.submit(submitBtn);
    });

    component.getByText('Invalid', { exact: false });
  });
});
