const getRankArray = (hand) => {
  let ranks = []
  hand.forEach(card => {
    ranks.push(card.rank);
  });
  return ranks
}

const rankSum = (array) => {
  return array.reduce((a, b) => a + b);
};

export {rankSum, getRankArray};
