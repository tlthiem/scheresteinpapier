import React from 'react';
import './App.scss';
import PlayerCard from './components/Player';
import RefereeCard from './components/Referee';
import { PickSameChoice, PickRandomChoice, Paper, Rock, Scissors } from './game';
import { Strategy } from './game/strategies/Strategy';

export interface AppProps {}

export interface AppState {
  results: Results;
  totalRounds: number;
}

interface Results {
  firstPlayer: number;
  secondPlayer: number;
  draw: number;
}

class App extends React.Component<AppProps, AppState> {
  private firstPlayer: Strategy;
  private secondPlayer: Strategy;
  constructor(props: AppProps, state: AppState) {
    super(props, state);
    // assigning a strategy to our players
    this.firstPlayer = new PickSameChoice(new Paper());
    this.secondPlayer = new PickRandomChoice([new Paper(), new Rock(), new Scissors()]);
    //setting up state
    this.state = { results: { firstPlayer: 0, secondPlayer: 0, draw: 0 }, totalRounds: 0 };
  }

  playRound = () => {
    // This implementation skips the procedure of revealing each others choices (at the same time),
    // because none of the available strategies include cheating ;)
    const roundResult = this.firstPlayer.draw().beats(this.secondPlayer.draw());
    const state = { ...this.state }; // cloning state
    if (roundResult === 0) state.results.draw++;
    if (roundResult < 0) state.results.secondPlayer++;
    if (roundResult > 0) state.results.firstPlayer++;
    this.setState((prev, props) => ({ results: state.results, totalRounds: prev.totalRounds + 1 }));
  };

  playGame = () => {
    this.setState({ results: { firstPlayer: 0, secondPlayer: 0, draw: 0 }, totalRounds: 0 });
    for (let i: number = 0; i < 100; i++) {
      //disable react setState batching for dramatic effect :) ...cpu glüht
      setTimeout(this.playRound, 5000);
    }
  };

  render() {
    const { totalRounds, results } = this.state;
    return (
      <React.Fragment>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">Schere Stein Papier</h5>
        </div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Schere Stein Papier</h1>
          <p className="lead">
            • Schere schlägt Papier • Stein schlägt Schere • Papier schlägt Stein • Wenn beide Spieler dasselbe wählen, gilt die Runde als
            unentschieden.
          </p>
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">
            <PlayerCard name="A" wonGames={results.firstPlayer} totalGames={totalRounds} description={this.firstPlayer.description}></PlayerCard>
            <RefereeCard buttonHandler={this.playGame} draws={results.draw} totalGames={totalRounds}></RefereeCard>
            <PlayerCard
              name="B"
              wonGames={results.secondPlayer}
              totalGames={totalRounds}
              description={this.secondPlayer.description}
            ></PlayerCard>
          </div>

          <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
              <div className="col-12 col-md">
                <small className="d-block mb-3 text-muted">
                  Dieses Designtemplate wurde ursprünglich von Mark Otto, Jacob Thornton und weiteren Bootstrap Contributors erstellt und als
                  Beispiel und Vorlage auf{' '}
                  <a href="https://getbootstrap.com/docs/4.4/examples/pricing/" rel="noopener noreferrer" target="_blank">
                    getBootstrap.com
                  </a>{' '}
                  für jeden frei zur Verfügung gestellt. &copy; Tom Lukas Thiemann&nbsp;&nbsp;{new Date().getFullYear()}
                </small>
                <small className="d-block mb-3 text-muted"></small>
              </div>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
