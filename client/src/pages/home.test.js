import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';

test('verifies something', () => {
  const { getByText } = render(<Home />);
  const homeWord = getByText(/REBEKAH LASKIN/);
  expect(homeWord).toBeInTheDocument();
});
