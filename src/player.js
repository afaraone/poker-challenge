import {rankScore} from './score';

class Player {
  constructor(cards) {
    this.hand = cards;
    this.score = rankScore(cards);
  };
};

export default Player;
