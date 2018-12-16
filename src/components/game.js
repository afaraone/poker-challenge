import React, { Component } from 'react';
import GameForm from './gameForm';
import Player from './player';
import deal from '../deck';
import getScore from '../score';
import createPlayerObjects from '../createPlayerObjects';


// gets an array of hands from deal function and creates Player objects
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: null,
      error: false
    };
  };

  // calls deal method, sets player objects to state
  play(numPlayers, numCards) {
    // set error to true if impossible combination
    if (numPlayers * numCards > 52 || numPlayers * numCards === 0) {
      this.setState({players: null, error: true});
    } else {
      let dealtCards = deal(numPlayers, numCards);
      let players = createPlayerObjects(dealtCards);
      this.setState({players: players, error: false});
    };
  };

  // maps array of player objects to Player React component
  renderPlayers() {
    let players = this.state.players.map((playerObject, index) => {
      return(<Player {...playerObject} key={index} />)
    });
    return players
  }

  render() {
    let playersAreLoaded = this.state.players !== null
    let showError = this.state.error
    return (
      <>
        <GameForm play={(numPlayers, numCards) => this.play(numPlayers, numCards)}/>
        {showError && <h2>Not possible!</h2>}
        {playersAreLoaded && this.renderPlayers()}
      </>
    )
  };
};

export default Game;
