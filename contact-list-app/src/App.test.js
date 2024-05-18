import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact list heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Contact List/i);
  expect(headingElement).toBeInTheDocument();
});
