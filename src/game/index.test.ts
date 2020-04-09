import * as g from '.';
import { Choice } from './choices/Choice';

test('Paper, Scissors and Rock to inherit Choice', () => {
  const paper = new g.Paper();
  const rock = new g.Rock();
  const scissors = new g.Scissors();
  expect(paper instanceof Choice).toBeTruthy();
  expect(rock instanceof Choice).toBeTruthy();
  expect(scissors instanceof Choice).toBeTruthy();
});

test('Paper to always beat Rock', () => {
  const paper = new g.Paper();
  const rock = new g.Rock();
  expect(paper.beats(rock)).toBe(1); // paper wins against rock
  expect(rock.beats(paper)).toBe(-1); // rock loses against paper
});

test('Rock to always beat Scissors', () => {
  const rock = new g.Rock();
  const scissors = new g.Scissors();
  expect(rock.beats(scissors)).toBe(1); // rock wins against scissors
  expect(scissors.beats(rock)).toBe(-1); // scissors loses against rock
});

test('Scissors to always beat Paper', () => {
  const paper = new g.Paper();
  const scissors = new g.Scissors();
  expect(scissors.beats(paper)).toBe(1); // scissors wins against paper
  expect(paper.beats(scissors)).toBe(-1); // paper loses against scissors
});

test('PickSameChoice returns the provided Choice', () => {
  const scissors = new g.Scissors();
  const strat = new g.PickSameChoice(scissors);
  expect(strat.draw().label).toBe(scissors.label);
});

test('PickRandomChoice returns the provided Choice when ONLY provided with ONE index', () => {
  const scissors = new g.Scissors();
  const strat = new g.PickRandomChoice([scissors]);
  expect(strat.draw().label).toBe(scissors.label);
});

test('PickRandomChoice returns one of the provided Choices', () => {
  const scissors = new g.Scissors();
  const rock = new g.Rock();
  const label = new g.PickRandomChoice([scissors, rock]).draw().label;
  expect(label === 'stein' || label === 'schere').toBeTruthy();
});

test('PickSameChoice description includes provided Choice label', () => {
  const rock = new g.Rock();
  const descr = new g.PickSameChoice(rock).description;
  expect(descr).toMatch(/stein/i);
});
