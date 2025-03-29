import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import UserList from '../src/components/UserList';

describe('UserList Component', () => {
  test('renders without crashing', () => {
    render(<UserList />);
    expect(screen.getByText(/user management/i)).toBeInTheDocument();
  });

  test('shows alert if fields are empty when submitting', () => {
    window.alert = jest.fn(); // Mock alert
    render(<UserList />);
    const button = screen.getByRole('button', { name: /add user/i });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Please enter both name and email!');
  });
});
