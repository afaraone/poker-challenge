import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Player from './player';
import Card from './card';

let playerNotWinner = {hand: [{rank: 1, suit: 2}, {rank: 2, suit: 2},
  {rank: 3, suit: 2}, {rank: 4, suit: 2}], score: 50, winner: false}

let playerWinner = {hand: [{rank: 3, suit: 2}, {rank: 4, suit: 2},
  {rank: 5, suit: 2}, {rank: 6, suit: 2}], score: 58, winner: true}

describe('Player', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player {...playerNotWinner} />)
  });

  it('renders score', () => {
    expect(wrapper.text()).toContain("50");
  });

  it('renders Card components', () => {
    expect(wrapper.find(Card)).toHaveLength(4);
  });

  it('renders winner message if winner', () => {
    wrapper = shallow(<Player {...playerWinner} />)
    expect(wrapper.text()).toContain("Winner!");
  });
});
