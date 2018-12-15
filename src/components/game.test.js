import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Game from './game';
import GameForm from './gameForm';
import Player from './player'
import * as deck from '../deck'
import {mockDealtCards, mockHand, mockPlayerObject, mockPlayerObjectList} from '../mocks'

// mock deal
jest.spyOn(deck, 'deal').mockImplementation(() => mockDealtCards);

describe('Game - unit test', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Game />));


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
    it('calls deal with arguments and saves player objects to state', () => {
      wrapper.instance().play(3, 4);
      expect(deck.deal).toHaveBeenCalledWith(3, 4);
      expect(wrapper.state('players')).toEqual(mockPlayerObjectList);
    });
  });

  describe('#createPlayerObject', () => {
    it('creates a player object from a hand array', () => {
      expect(wrapper.instance().createPlayerObject(mockHand)).toEqual(mockPlayerObject);
    });
  });

  describe('#getWinnerIndex', () => {
    it('it returns index of player obj with highest score', () => {
      expect(wrapper.instance().getWinnerIndex(mockPlayerObjectList)).toEqual(1);
    });
  });

  describe('#setWinnerState - for a list of player objects', () => {
    beforeEach(() => {
      wrapper.instance().setWinnerState(mockPlayerObjectList);
    });

    it('it sets winner to true if has highest score', () => {
      expect(mockPlayerObjectList[1].winner).toEqual(true);
    });

    it('it sets winner to false for others', () => {
      expect(mockPlayerObjectList[0].winner).toEqual(false);
      expect(mockPlayerObjectList[2].winner).toEqual(false);
    });
  })
});
