/* The "Schere Stein Papier" game logic index file 
This implementation was created by tom thiemann 04.04.2020 */
import { Rock } from './choices/Rock';
import { Paper } from './choices/Paper';
import { Scissors } from './choices/Scissors';
import { PickSameChoice } from './strategies/PickSameChoice';
import { PickRandomChoice } from './strategies/PickRandomChoice';

export { Rock, Paper, Scissors, PickRandomChoice, PickSameChoice };
