import { Choice } from './Choice';
import { PAPER } from './Paper';

export const SCISSORS = 'schere';

export class Scissors extends Choice {
  constructor() {
    super(SCISSORS, [PAPER]);
  }
}
