// Returns a shuffled array of card objects
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

// returns hand sorted by suit then rank val (used for player hands)
const sortHand = (hand) => {
  return hand.sort((a, b)  => {
    return a.suit - b.suit || a.rank - b.rank
  })
}

// returns dealtCards with each hand sorted
const sortDealtCards = (dealtCards) => {
  dealtCards.forEach(hand => {
    sortHand(hand);
  });
  return dealtCards;
};

// returns numPlayers * hands of  numCards * card objects
// each hand is a sorted array
const deal = (numPlayers, numCards) => {
  let dealtCards = [];
  let cards = deck();
  // iterator makes a slice from the deck
  let endPoint = 0;
  for (let i = 0; i < numPlayers; i++) {
    let startPoint = endPoint;
    endPoint = startPoint + numCards;
    let hand = cards.slice(startPoint, endPoint)
    dealtCards.push(hand)
    startPoint = endPoint;
  };
  return sortDealtCards(dealtCards);
};

export {deck, deal, shuffle, sortHand, sortDealtCards}
