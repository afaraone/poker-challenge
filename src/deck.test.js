import {deck} from './deck';

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
