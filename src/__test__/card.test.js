import React, { Component } from 'react';
import {shallow} from 'enzyme';
import Card from '../components/card';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card suit={3} rank={10} />);
  });

  it('renders formatted string', () => {
    expect(wrapper.contains(<h2>10♥️</h2>)).toEqual(true);
  });
});
