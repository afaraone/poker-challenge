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

const isStraight = (array) => {
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] +1 !== array[i + 1]) return false
  }
  return true
}

const countPairsTriples = (array) => {
  array.sort();
  let count = 0;
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] === array[i + 1]) {
      count += 10;
    };
  };
  return count
};

export {rankSum, getRankArray, isStraight, countPairsTriples};
