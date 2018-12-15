import React, { Component } from 'react';
import GameForm from './gameForm';
import Player from './player';
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

  renderPlayers() {
    let players = this.state.players.map((playerObject, index) => {
      return(<Player {...playerObject} key={index} />)
    });
    return players
  }

  render() {
    let playersAreLoaded = this.state.players !== null
    return (
      <>
        <GameForm play={(numPlayers, numCards) => this.play(numPlayers, numCards)}/>
        {playersAreLoaded && this.renderPlayers()}
      </>
    )
  };
};

export default Game;
