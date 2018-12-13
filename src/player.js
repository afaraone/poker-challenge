import {rankSum} from './score';

class Player {
  constructor(cards) {
    this.hand = cards;
    this.score = rankSum(cards);
  };
};

export default Player;
