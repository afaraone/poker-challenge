import getScore from './score';

// returns an array of player objects
// has winner set to true for highest score, false for the rest
const createPlayerObjects = (dealtCards) => {
  let players = []
  dealtCards.forEach(hand => {
    players.push({hand: hand, score: getScore(hand)})
  })
  setWinnerState(players);
  return players
}

// return index of array for element with highest score value
const getWinnerIndex = (players) => {
  let winnerScore = 0;
  let winnerIndex;
  for (let i = 0; i < players.length; i++) {
    if (players[i].score >winnerScore) {
      winnerIndex = i;
      winnerScore = players[i].score;
    };
  };
  return winnerIndex;
}

// sets val for winner key for each player object
const setWinnerState = (players) => {
  let winnerIndex = getWinnerIndex(players);
  for (let i = 0; i < players.length; i++) {
    if (i === winnerIndex) {
      players[i].winner = true
    } else {
      players[i].winner = false
    }
  }
};

export default createPlayerObjects;
