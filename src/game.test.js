import Game from './game';
import * as deck from './deck';
import Player from './player';
import {mockDealtCards} from './mocks';

// mocking Player class, first time instantiated has score as 1
// all other times has score 1
jest.mock('./player', () => {
  return jest.fn()
    .mockImplementationOnce(() => {
      return {score: 2};
    })
    .mockImplementation(() => {
      return {score: 1};
    });
});

// spies on deal method
jest.spyOn(deck, 'deal').mockImplementation(() => mockDealtCards);

describe('Game', () => {
  let game = new Game();

  describe('play', () => {
    game.play(3,5);

    it('calls deal fn', () => {
      expect(deck.deal).toHaveBeenCalled();
    });

    it('instantiates a Player numPlayer times', () => {
      expect(Player).toHaveBeenCalledTimes(3);
    });

    it('player object is passed element from deal fn', () => {
      expect(Player).toHaveBeenCalledWith(mockDealtCards[0]);
    });

    it('numPlayer * Player objects set to game.players', () => {
      expect(game.players).toHaveLength(3);
    });

    it('adds winner Player obj to this.winner', () => {
      expect(game.winner).toEqual({score: 2});
    });
  });

  describe('calculateWinner', () => {
    it('returns element which has highest score value', () => {
      let players = [{score: 1}, {score: 2}, {score: 3}];
      expect(game.calculateWinner(players)).toEqual(players[2]);
    });
  });
});
