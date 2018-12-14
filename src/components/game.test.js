import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Game from './game';
import GameForm from './gameForm';

describe('Game - unit test', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Game />));


  it('renders gameForm component', () => {
    expect(wrapper.containsMatchingElement(<GameForm/>)).toEqual(true)
  });
});
