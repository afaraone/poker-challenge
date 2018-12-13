import Game from './game';
import * as deck from './deck';

let mockDealtCards = [[{rank: 1, suit: 2}, {rank: 1, suit: 2}]
  [{rank: 1, suit: 2}, {rank: 1, suit: 2}],[{rank: 1, suit: 2}, {rank: 1, suit: 2}]]

describe('Game', () => {
  let game = new Game();

  describe('play', () => {
    beforeEach(() => {
      jest.spyOn(deck, 'deal')
        .mockImplementation(() => mockDealtCards);
    });

    it('calls deal fn and saves return value to players', () => {
      game.play(2, 2);
      expect(game.players).toEqual(mockDealtCards);
    });
  });
  });
