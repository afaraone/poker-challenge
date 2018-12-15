import React, { Component } from 'react';
import GameForm from './gameForm';
import {deal} from '../deck';
import {getScore} from '../score';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: null
    };
  };

  play(numPlayers, numCards) {
    let players = [];
    deal(numPlayers, numCards).forEach(hand => {
      players.push(this.createPlayerObject(hand));
    });
    this.setState({players: players})
  };

  createPlayerObject(hand) {
    return {hand: hand, score: getScore(hand)}
  }

  render() {
    return (
      <>
        <GameForm play={(numPlayers, numCards) => this.play(numPlayers, numCards)}/>
      </>
    )
  };
};

export default Game;
