// gets total score including bonus points
const getScore = (hand) => {
  let total = 0;
  let rankArray = getRankArray(hand);
  total += addSum(rankArray);
  total += addStraight(rankArray);
  total += addPairsTriples(rankArray);
  return total;
};

// converts array of cards object into array of rank integers
const getRankArray = (hand) => {
  let ranks = []
  hand.forEach(card => {
    ranks.push(card.rank);
  });
  return ranks.sort()
}

const addSum = (array) => {
  return array.reduce((a, b) => a + b);
};

const addPairsTriples = (array) => {
  let count = 0;
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] === array[i + 1]) {
      count += 10;
    };
  };
  return count
};

const addStraight = (array) => {
  return isStraight(array) ? 40 : 0
}

const isStraight = (array) => {
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] + 1 !== array[i + 1]) return false
  }
  return true
}

export {addSum, getRankArray, isStraight, addStraight, addPairsTriples, getScore};
