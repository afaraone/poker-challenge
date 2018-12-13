import {rankSum, getRankArray, isStraight, countPairsTriples} from './score'
import {mockHand} from './mocks'

describe('getRankArray', () => {
  it('returns an array of rank integers', () => {
    expect(getRankArray(mockHand)).toEqual([1,2,3,4])
  });
});

describe('rankSum', () => {
  it('returns sum of element', () => {
    let ranks = [1,2,3,4]
    expect(rankSum(ranks)).toEqual(10);
  });
});

describe('isStraight', () => {
  it('returns true if array is sequence', () => {
    let ranks = [2,3,4,5];
    expect(isStraight(ranks)).toEqual(true);
  });

  it('returns false if array is not sequence', () => {
    let ranks = [2,3,4,4];
    expect(isStraight(ranks)).toEqual(false);
  });
});

describe('countPairsTriples', () => {
  it('returns 0 if all elements different', () => {
    let ranks = [3,5,6,8]
    expect(countPairsTriples(ranks)).toEqual(0);
  });

  it('returns 10 for each pair found', () => {
    let ranks = [3,5,5,6, 8, 8]
    expect(countPairsTriples(ranks)).toEqual(20);
  });

  it('returns 20 for each triple found', () => {
    let ranks = [3,5,5,5, 8, 9, 9, 9]
    expect(countPairsTriples(ranks)).toEqual(40);
  });
});
