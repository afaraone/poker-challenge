import {deck, deal} from './deck';

describe("deck", () =>{
  it('returns 52 cards objects', () => {
    expect(deck()).toHaveLength(52);
  });

  it('card object contains rank and suit keys', () => {
    expect(deck()[0]).toHaveProperty('suit');
    expect(deck()[0]).toHaveProperty('rank');
  });

  it('all cards are unique', () => {
    let uniqueItems = Array.from(new Set(deck()));
    expect(deck()).toEqual(uniqueItems);
  });
});

describe('deal', () => {
  let dealtCards = deal(4, 5)
  it('returns an array equal to length of numPlayers', () => {
    expect(dealtCards).toHaveLength(4);
  });

  it('each array has length of numCards', () => {
    expect(dealtCards[0]).toHaveLength(5);
  });
});
