// Returns an array of card objects

const deck = () => {
  let cards = [];
  for (let suit = 0; suit < 4; suit++) {
    for (let rank = 1; rank < 14; rank++) {
      cards.push({rank: rank, suit: suit});
    };
  };
  return shuffle(cards);
};


// returns an randomly sorted array
const shuffle = array => {
  return array.slice().sort(() => {
    return Math.random() - 0.5;
  });
};

// returns numPlayers * arrays of numCards * cards 
const deal = (numPlayers, numCards) => {
  let dealtCards = [];
  let cards = deck();

  let endPoint = 0;
  for (let i = 0; i < numPlayers; i++) {
    let startPoint = endPoint;
    endPoint = startPoint + numCards;
    dealtCards.push(cards.slice(startPoint, endPoint))
    startPoint = endPoint;
  };
  return dealtCards;
};

export {deck, deal, shuffle}
