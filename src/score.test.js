import {rankScore} from './score'
import {mockHand} from './mocks'

describe('rankScore', () => {
  it('returns total of rank value for each element', () => {
    expect(rankScore(mockHand)).toEqual(10);
  });
});
