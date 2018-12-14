import React, { Component } from 'react';
import GameForm from './gameForm';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  play(numPlayers, numCards) {
    
  };

  render() {
    return (
      <>
        <GameForm play={(numPlayers, numCards) => this.play}/>
      </>
    )
  };
};

export default Game;
