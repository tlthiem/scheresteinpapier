import { Choice } from '../choices/Choice';
import { Strategy } from './Strategy';

/**Returns the provided `Choice`.*/
export class PickSameChoice implements Strategy {
  constructor(readonly choice: Choice) {}
  description = `Wählt immer ${this.choice.label[0].toUpperCase() + this.choice.label.slice(1)}.`;
  draw = () => this.choice;
}
