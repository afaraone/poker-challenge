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
};

export default Game;
