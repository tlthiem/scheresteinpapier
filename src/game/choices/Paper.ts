import { ROCK } from './Rock';
import { Choice } from './Choice';

export const PAPER = 'papier';

export class Paper extends Choice {
  constructor() {
    super(PAPER, [ROCK]);
  }
}
