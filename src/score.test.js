import {rankSum, getRankArray, isStraight} from './score'
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
