// Returns an array of card objects

const deck = () => {
  let cards = [];
  for (let suit = 0; suit < 4; suit++) {
    for (let rank = 1; rank < 14; rank++) {
      cards.push({rank: rank, suit: suit});
    };
  };
  return cards
};

export {deck}
