import {deck, shuffle, deal} from './deck';

describe("deck", () =>{
  let cards = deck();

  it('returns 52 cards objects', () => {
    expect(cards).toHaveLength(52);
  });

  it('card object contains rank and suit keys', () => {
    expect(cards[0]).toHaveProperty('suit');
    expect(cards[0]).toHaveProperty('rank');
  });

  it('all cards are unique', () => {
    // create a copy of cards that only has unique elements
    let uniqueCards = Array.from(new Set(cards));
    expect(cards).toEqual(uniqueCards);
  });
});

describe('shuffle', () => {
  it('returns randomly sorted copy of array', () => {
    let array = [1, 2, 3, 4];
    expect(shuffle(array)).not.toEqual(array);
  });
});

describe('deal', () => {
  let dealtCards = deal(4, 5);

  it('returns an array equal to length of numPlayers', () => {
    expect(dealtCards).toHaveLength(4);
  });

  it('each array has length of numCards', () => {
    expect(dealtCards[0]).toHaveLength(5);
  });
});