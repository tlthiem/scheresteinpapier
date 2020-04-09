import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('page renders', () => {
  const { getByText } = render(<App />);
  const p = getByText(/Schere schlägt Papier/);
  expect(p).toBeInTheDocument();
});

test('played games change when button clicked', async () => {
  const { getByText } = render(<App />);
  const button = getByText(/Neues Spiel/);
  const small1 = getByText(/Unentschieden:/).innerHTML;
  expect(small1).toBeTruthy();
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  //sleep until stack is empty and dom rerenders...
  await new Promise((resolve) => setTimeout(resolve));
  //get small element again to see if something changed
  const small2 = getByText(/Unentschieden:/).innerHTML;
  expect(small1 === small2).toBeFalsy();
});
