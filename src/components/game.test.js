import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Game from './game';
import GameForm from './gameForm';
import Player from './player'

describe('Game', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Game />)
  });

  it('renders gameForm component', () => {
    expect(wrapper.containsMatchingElement(<GameForm/>)).toEqual(true)
  });

  describe('rendering player components', () => {
    it('renders player objects', () => {
      wrapper.instance().play(3, 4);
      expect(wrapper.find(Player)).toHaveLength(3);
    });
  });

  describe('#play', () => {
    it('renders error message if product of arguments greater than 52', () => {
      wrapper.instance().play(30, 5);
      expect(wrapper.text()).toContain('Not possible!');
    });

    it('renders error message if product of arguments is 0', () => {
      wrapper.instance().play(0, 5);
      expect(wrapper.text()).toContain('Not possible!');
    });
  });
});
