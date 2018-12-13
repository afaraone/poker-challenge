import Player from './player';
import {mockIndividualCards} from './mocks'

describe('Player', () => {
  let player;

  it('stores constructor argument to hand', () => {
    player = new Player(mockIndividualCards);
    expect(player.hand).toEqual(mockIndividualCards);
  });
});
