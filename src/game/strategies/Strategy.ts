import { Choice } from '../choices/Choice';

/**Defines properties and methods all Strategies have to implement */
export interface Strategy {
  description: string;
  /**Draws a Choice according to the chosen `Strategy`.*/
  draw(): Choice;
}
