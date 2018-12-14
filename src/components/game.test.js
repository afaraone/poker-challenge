import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Game from './game';
import GameForm from './gameForm';
import * as deck from '../deck'
import {mockDealtCards} from '../mocks'

// mock deal
jest.spyOn(deck, 'deal').mockImplementation(() => mockDealtCards);

describe('Game - unit test', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Game />));


  it('renders gameForm component', () => {
    expect(wrapper.containsMatchingElement(<GameForm/>)).toEqual(true)
  });

  describe('#play', () => {
    it('calls deal with arguments and saves to players', () => {
      wrapper.instance().play(3, 4);
      expect(deck.deal).toHaveBeenCalledWith(3, 4);
      expect(wrapper.state('players')).toEqual(mockDealtCards);
    });
  });
});
