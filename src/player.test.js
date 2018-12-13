import Player from './player';
import {mockHand} from './mocks'

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player(mockHand);
  });

  it('stores constructor argument to hand', () => {
    expect(player.hand).toEqual(mockHand);
  });

  it('calls calculateScore and sets to score variable', () => {
    expect(player.score).toEqual(10);
  });

  describe('calculateScore', () => {
    it('returns total of rank values in hand array', () => {
      expect(player.calculateScore(mockHand)).toEqual(10);
    });
  });
});
