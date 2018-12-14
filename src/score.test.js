import {addSum, getRankArray, addStraight, addPairsTriples, getScore} from './score'
import {mockHand} from './mocks'

describe('getScore', () => {
  let normalHand = [{rank: 2, suit: 1}, {rank: 4, suit: 2}, {rank: 5, suit: 2}]
  let triple = [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 2}]
  let doublePair = [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 3, suit: 4}]

  it('returns sum of elements (no special scores)', () => {
    expect(getScore(normalHand)).toEqual(11)
  })

  it('returns sum of elements (one triple)', () => {
    expect(getScore(triple)).toEqual(29)
  })

  it('returns sum of elements (2 pairs)', () => {
    expect(getScore(doublePair)).toEqual(30)
  })
});

// tests for private methods

describe('getRankArray', () => {
  it('returns an array of rank integers', () => {
    expect(getRankArray(mockHand)).toEqual([1,2,3,4])
  });
});

describe('addSum', () => {
  it('returns sum of element', () => {
    let ranks = [1,2,3,4]
    expect(addSum(ranks)).toEqual(10);
  });
});

describe('addStraight', () => {
  it('returns 40 if array is sequence', () => {
    let ranks = [2,3,4,5];
    expect(addStraight(ranks)).toEqual(40);
  });

  it('returns 0 if array is not sequence', () => {
    let ranks = [2,3,4,4];
    expect(addStraight(ranks)).toEqual(0);
  });
});

describe('addPairsTriples', () => {
  it('returns 0 if all elements different', () => {
    let ranks = [3,5,6,8]
    expect(addPairsTriples(ranks)).toEqual(0);
  });

  it('returns 10 for each pair found', () => {
    let ranks = [3,5,5,6, 8, 8]
    expect(addPairsTriples(ranks)).toEqual(20);
  });

  it('returns 20 for each triple found', () => {
    let ranks = [3,5,5,5, 8, 9, 9, 9]
    expect(addPairsTriples(ranks)).toEqual(40);
  });
});
