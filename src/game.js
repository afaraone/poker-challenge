import {deal} from './deck';

class Game {
  constructor() {
    players: null
  };

  play (numPlayers, numCards) {
    this.players = deal(numPlayers, numCards);
  };
};

export default Game;
