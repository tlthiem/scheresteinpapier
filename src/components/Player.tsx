import * as React from 'react';
import Card from './Card';

export interface PlayerCardProps {
  name: string;
  wonGames: number;
  totalGames: number;
  description?: string;
}

const PlayerCard = ({ name, wonGames, totalGames, description }: PlayerCardProps) => {
  return (
    <Card
      headline={'Spieler ' + name}
      body={description ? description : ''}
      nenner={'Gewonnen: \n' + wonGames.toString()}
      zaehler={totalGames.toString() + ' Spielen'}
    ></Card>
  );
};

export default PlayerCard;
