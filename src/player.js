class Player {
  constructor(cards) {
    this.hand = cards;
    this.score = 0;
  };

  calculateScore() {
    let total = 0
    this.hand.forEach(card => {
      total += card.rank;
    });
    return total;
  };
};

export default Player;
