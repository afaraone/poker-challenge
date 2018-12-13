import {deal} from './deck';
import Player from './player';

class Game {
  constructor() {
    this.players = []
  };

  play (numPlayers, numCards) {
    let cards = deal(numPlayers, numCards);
    cards.forEach(hand => {
      this.players.push(new Player(hand));
    });
  };

  calculateWinner(players) {
    let highestScore = 0;
    let index = 0;
    for (let i = 0; i < players.length; i++) {
      if (players[i].score > highestScore) {
        highestScore = players[i].score;
        index = i;
      }
    };
    return players[index];
  }
};

export default Game;
