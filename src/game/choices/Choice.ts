import { ROCK } from './Rock';
import { PAPER } from './Paper';
import { SCISSORS } from './Scissors';

type ChoiceLabel = typeof ROCK | typeof PAPER | typeof SCISSORS;

/**All Choices inherit these properties and methods.
 *
 * A decision was made to use an Array for the `winsAgainst` argument
 * instead of a basic type to allow for easier extension of the ruleset in the future.
 */
export abstract class Choice {
  constructor(readonly label: ChoiceLabel, readonly winsAgainst: ChoiceLabel[]) {}
  /**Returns `0` when choices are equal. Negative when the arguments choice is winning. Positive otherwise.
   * Like `compareTo()` in __java__ ;)
   * @param opponent Some Opponents `Choice`
   */
  beats(opponent: Choice) {
    if (this.label === opponent.label) return 0;
    return this.winsAgainst.includes(opponent.label) ? 1 : -1;
  }
}
