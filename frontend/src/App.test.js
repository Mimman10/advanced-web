import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the user management header', () => {
  render(<App />);
  expect(screen.getByText(/user management/i)).toBeInTheDocument();
});
