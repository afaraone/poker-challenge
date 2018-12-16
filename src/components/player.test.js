import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Player from './player';
import Card from './card';
import {mockPlayerObjectWithWinner, mockPlayerObjectHigherScoreWithWinner} from '../mocks';

describe('Player', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player {...mockPlayerObjectWithWinner} />)
  });

  it('renders score', () => {
    expect(wrapper.text()).toContain("50");
  });

  it('renders Card components', () => {
    expect(wrapper.find(Card)).toHaveLength(4);
  });

  it('renders winner message if winner', () => {
    wrapper = shallow(<Player {...mockPlayerObjectHigherScoreWithWinner} />)
    expect(wrapper.text()).toContain("Winner!");
  });
});
