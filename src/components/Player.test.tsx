import React from 'react';
import { render } from '@testing-library/react';
import Player from './Player';

test('player renders without description', () => {
  const { getByText } = render(<Player name="test" totalGames={0} wonGames={0} />);
  const name = getByText(/test/);
  expect(name).toBeInTheDocument();
});

test('page renders with description', () => {
  const { getByText } = render(<Player name="test" totalGames={0} wonGames={0} description="some text" />);
  const description = getByText(/some text/);
  expect(description).toBeInTheDocument();
});
