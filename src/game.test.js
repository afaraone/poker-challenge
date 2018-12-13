import Game from './game';
import * as deck from './deck';
import mockDealtCards from './mocks';

describe('Game', () => {
  let game = new Game();

  describe('play', () => {
    beforeEach(() => {
      jest.spyOn(deck, 'deal')
        .mockImplementation(() => mockDealtCards);
    });

    it('calls deal fn and saves return value to players', () => {
      game.play(3, 2);
      expect(game.players).toEqual(mockDealtCards);
    });
  });
});
