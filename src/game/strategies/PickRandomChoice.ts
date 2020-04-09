import { Choice } from '../choices/Choice';
import { Strategy } from './Strategy';

/**Returns a _pseudo randomly_ choosen `Choice` out of the `Choice[]` provided by the argument*/
export class PickRandomChoice implements Strategy {
  constructor(readonly choices: Choice[]) {}
  description = `Wählt immer zufällig.`;
  draw = () => this.choices[Math.floor(Math.random() * this.choices.length)];
}
