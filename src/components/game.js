import React, { Component } from 'react';
import GameForm from './gameForm';
import {deal} from '../deck';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: null
    };
  };

  play(numPlayers, numCards) {
    this.setState({
      players: deal(numPlayers, numCards)
    });
  };

  render() {
    return (
      <>
        <GameForm play={(numPlayers, numCards) => this.play(numPlayers, numCards)}/>
      </>
    )
  };
};

export default Game;
