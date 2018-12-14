import {getScore} from './score';

class Player {
  constructor(cards) {
    this.hand = cards;
    this.score = getScore(cards);
  };
};

export default Player;
