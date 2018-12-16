import createPlayerObjects from './createPlayerObjects'

describe('createPlayerObject', () => {
  let hand = [{rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}]
  let winnerHand = [{rank: 3, suit: 2}, {rank: 4, suit: 2}, {rank: 5, suit: 2}, {rank: 6, suit: 2}]
  let dealtCards = [hand, hand, winnerHand]

  let playerObjects = [
    {hand: hand,score: 50, winner: false},
    {hand: hand,score: 50, winner: false},
    {hand: winnerHand, score: 58, winner: true},
  ]

  it('turns an array of hands into an array of player objects', () => {
    expect(createPlayerObjects(dealtCards)).toEqual(playerObjects);
  });
});
