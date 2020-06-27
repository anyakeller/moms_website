import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('verifies something', () => {
  const { getByText } = render(<App />);
  const homeWord = getByText(/home/);
  expect(homeWord).toBeInTheDocument();
});
