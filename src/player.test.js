import Player from './player';
import {mockHand} from './mocks'
import * as score from './score'

// spy on score method
jest.spyOn(score, 'getScore').mockImplementation(() => 10)

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = new Player(mockHand);
  });

  it('stores constructor argument to hand', () => {
    expect(player.hand).toEqual(mockHand);
  });

  it('calls getScore and sets to score variable', () => {
    expect(score.getScore).toHaveBeenCalled();
    expect(player.score).toEqual(10);
  });
});
