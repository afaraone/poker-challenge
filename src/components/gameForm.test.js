import React, { Component } from 'react';
import {shallow} from 'enzyme';
import GameForm from './gameForm';

describe('GameForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<GameForm />);
  });

  it('numPlayers input updates this.state.numPlayers', () => {
    wrapper.find('#num-players-text').simulate('change', {target: {value: '4'}})
    expect(wrapper.state('numPlayers')).toEqual(4)
  });

  it('numCards input updates this.state.numCards', () => {
    wrapper.find('#num-cards-text').simulate('change', {target: {value: '5'}})
    expect(wrapper.state('numCards')).toEqual(5)
  });
});
