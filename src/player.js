class Player {
  constructor(cards) {
    this.hand = cards;
    this.score = this.calculateScore(cards);
  };

  calculateScore(hand) {
    let total = 0
    hand.forEach(card => {
      total += card.rank;
    });
    return total;
  };
};

export default Player;
