// gets total score including bonus points
const getScore = (hand) => {
  let total = 0;
  let rankArray = getRankArray(hand);
  total += addSum(rankArray);
  total += addStraight(rankArray);
  total += addPairsTriples(rankArray);
  return total;
};

// private methods
// converts array of cards object into sorted array of rank integers
const getRankArray = (hand) => {
  let ranks = []
  hand.forEach(card => {
    ranks.push(card.rank);
  });
  return ranks.sort()
}

// returns total
const addSum = (array) => {
  return array.reduce((a, b) => a + b);
};

// adds 10 for every pair and 20 for triples
const addPairsTriples = (array) => {
  let count = 0;
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] === array[i + 1]) {
      count += 10;
    };
  };
  return count
};

// returns 40 if array is a straight
const addStraight = (array) => {
  return isStraight(array) ? 40 : 0
}

// returns bool if array is a straight
const isStraight = (array) => {
  //iterate through array, unless element + 1 is equal to neighbour return false
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] + 1 !== array[i + 1]) return false
  }
  return true
}

export default getScore;
