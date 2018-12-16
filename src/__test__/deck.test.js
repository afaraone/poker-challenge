import deal from '../deck';
import seedrandom from 'seedrandom';

describe('deal', () => {
  let dealtCards = deal(4, 5);

  it('returns an array equal to length of numPlayers', () => {
      expect(dealtCards).toHaveLength(4);
  });

  it('each array has length of numCards', () => {
      expect(dealtCards[0]).toHaveLength(5);
  });

  it('each array holds objects with rank and suit properties', () => {
    dealtCards.forEach(hand => {
      hand.forEach(card => {
        expect(card).toHaveProperty('suit');
        expect(card).toHaveProperty('rank');
      });
    });
  });
});
