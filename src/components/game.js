import React, { Component } from 'react';
import GameForm from './gameForm';
import Player from './player';
import {deal} from '../deck';
import {getScore} from '../score';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: null,
      error: false
    };
  };

  play(numPlayers, numCards) {
    if (numPlayers * numCards > 52 || numPlayers * numCards === 0) {
      this.setState({players: null, error: true})
    } else {
      let players = [];
      deal(numPlayers, numCards).forEach(hand => {
        players.push(this.createPlayerObject(hand));
      });
      this.setWinnerState(players);
      this.setState({players: players, error: false})
    }
  };

  getWinnerIndex(players) {
    let winnerScore = 0;
    let winnerIndex;
    for (let i = 0; i < players.length; i++) {
      if (players[i].score >winnerScore) {
        winnerIndex = i;
        winnerScore = players[i].score;
      };
    };
    return winnerIndex;
  }

  setWinnerState(players) {
    let winnerIndex = this.getWinnerIndex(players);
    for (let i = 0; i < players.length; i++) {
      if (i === winnerIndex) {
        players[i].winner = true
      } else {
        players[i].winner = false
      }
    }
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
