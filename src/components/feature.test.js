import React from 'react';
import ReactDOM from 'react-dom';
import seedrandom from 'seedrandom';
import { mount } from 'enzyme';
import Game from './game';
import Player from './player';
import Card from './card';

describe('Feature test', () => {
  let wrapper;

  beforeEach(() => {
    // set random to be predictable
    seedrandom(1, { global: true });
    wrapper = mount(<Game/>);
  });

  describe('happy path', () => {
    beforeEach(() => {
      wrapper.find('#num-players-text').simulate('change', {target: {value: '3'}});
      wrapper.find('#num-cards-text').simulate('change', {target: {value: '5'}});
      wrapper.find('#play-btn').simulate('click');
    })

    it('it renders 3 players', () => {
      expect(wrapper.find(Player)).toHaveLength(3)
    });

    it('each player has 5 cards', () => {
      let players = wrapper.find(Player);
      players.forEach(player => {
        expect(player.find(Card)).toHaveLength(5);
      });
    });

    it('each player has a score', () => {
      let players = wrapper.find(Player);
      players.forEach(player => {
        expect(player.find('#score')).toHaveLength(1);
      });
    });

    it('player with highest score has winner message (third player)', () => {
      let player = wrapper.find(Player).at(2);
      expect(player.text()).toContain("Winner!");
    });
  });

  describe('unhappy path', () => {
    it('renders error message if combination higher than 52', () => {
      wrapper.find('#num-players-text').simulate('change', {target: {value: '5'}});
      wrapper.find('#num-cards-text').simulate('change', {target: {value: '14'}});
      wrapper.find('#play-btn').simulate('click');
      expect(wrapper.contains(<h2>Not possible!</h2>)).toEqual(true)
    })

    it('renders error message if combination equal to 0', () => {
      wrapper.find('#num-players-text').simulate('change', {target: {value: '5'}});
      wrapper.find('#num-cards-text').simulate('change', {target: {value: '0'}});
      wrapper.find('#play-btn').simulate('click');
      expect(wrapper.contains(<h2>Not possible!</h2>)).toEqual(true)
    })
  });
});
