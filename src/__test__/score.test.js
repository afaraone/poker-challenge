import getScore from '../score';

describe('getScore', () => {
  let normalHand = [{rank: 2, suit: 1}, {rank: 4, suit: 2}, {rank: 5, suit: 2}];
  let triple = [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 2}];
  let doublePair = [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 3, suit: 4}];
  let straight = [{rank: 2, suit: 1}, {rank: 4, suit: 2}, {rank: 3, suit: 2}];

  it('returns sum of elements (no special scores)', () => {
    expect(getScore(normalHand)).toEqual(11);
  });

  it('returns sum of elements + 20 points triple bonus)', () => {
    expect(getScore(triple)).toEqual(29);
  });

  it('returns sum of elements + 2 * 10 points pair bonus', () => {
    expect(getScore(doublePair)).toEqual(30);
  });

  it('returns sum of elements + 40 point straight bonus', () => {
    expect(getScore(straight)).toEqual(49);
  });
});
