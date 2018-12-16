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

  // calls deal method, sets to state
  play(numPlayers, numCards) {
    // set error to true if impossible combination
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

  // return index of array for element with highest score value
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

  // sets val for winner key for each player object
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

  // returns a player object
  createPlayerObject(hand) {
    return {hand: hand, score: getScore(hand)}
  }

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
