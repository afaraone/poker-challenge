import React, { Component } from 'react';
import {shallow} from 'enzyme';
import GameForm from '../components/gameForm';

describe('GameForm', () => {
  let wrapper;
  let mockPlay = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<GameForm play={mockPlay}/>);
  });

  it('numPlayers input updates this.state.numPlayers', () => {
    wrapper.find('#num-players-text').simulate('change', {target: {value: '4'}});
    expect(wrapper.state('numPlayers')).toEqual(4);
  });

  it('numCards input updates this.state.numCards', () => {
    wrapper.find('#num-cards-text').simulate('change', {target: {value: '5'}});
    expect(wrapper.state('numCards')).toEqual(5);
  });

  it('Play button does cb to prop.play with numPlayers and numCards as args', () => {
    // set up with mock prop fn and state
    wrapper.find('#num-players-text').simulate('change', {target: {value: '4'}});
    wrapper.find('#num-cards-text').simulate('change', {target: {value: '5'}});
    wrapper.find('#play-btn').simulate('click');

    expect(mockPlay).toHaveBeenCalledWith(4, 5);
  });
});
