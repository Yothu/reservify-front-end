import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  prettyDOM,
  fireEvent,
  act
} from '@testing-library/react';
import LogIn from '../pages/Registration/LogIn';

describe('<Log In />', () => {
  let component;
  let submitBtn;

  beforeEach(() => {
    component = render(<LogIn />);
    submitBtn = component.getByRole('button', { name: /submit/i });
  });
  
  
  test('renders form corrently', () => {
    component.getByText('Log In');
    component.getByLabelText('Email', { exact: false });
    component.getByLabelText('Password');
    component.getByRole('button', { name: /submit/i });
  });
});