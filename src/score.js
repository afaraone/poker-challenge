const rankScore = (hand) => {
  let total = 0
  hand.forEach(card => {
    total += card.rank;
  });
  return total;
};

export {rankScore};
