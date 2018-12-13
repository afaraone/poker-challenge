import Player from './player';
import {mockIndividualCards} from './mocks'

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player(mockIndividualCards);
  });

  it('stores constructor argument to hand', () => {
    expect(player.hand).toEqual(mockIndividualCards);
  });

  describe('calculateScore', () => {
    it('returns total of rank values in hand array', () => {
      expect(player.calculateScore()).toEqual(10);
    });
  });
});
