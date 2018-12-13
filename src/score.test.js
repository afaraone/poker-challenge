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
