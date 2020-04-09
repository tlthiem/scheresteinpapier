import { Choice } from './Choice';
import { SCISSORS } from './Scissors';

export const ROCK = 'stein';

export class Rock extends Choice {
  constructor() {
    super(ROCK, [SCISSORS]);
  }
}
