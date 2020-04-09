import * as React from 'react';
import Card from './Card';

export interface RefereeCardProps {
  draws: number;
  totalGames: number;
  description?: string;
  buttonHandler?(event?: React.MouseEvent): any;
}

const RefereeCard = ({ draws, totalGames, description, buttonHandler }: RefereeCardProps) => {
  return (
    <Card
      headline={'Schiedsrichter'}
      nenner={'Unentschieden: \n' + draws.toString()}
      zaehler={totalGames.toString() + ' Spielen'}
      buttonLabel="Neues Spiel"
      buttonOnClick={buttonHandler}
    ></Card>
  );
};

export default RefereeCard;
