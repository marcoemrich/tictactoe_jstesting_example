import * as R from 'ramda'
import React from 'react'
import { shallow, mount } from 'enzyme';

import {Cell} from './cell';
import {Board} from './board';
import TicTacToe from '../model/tic_tac_toe';

describe('Board', () => {
  it('should have the right number of cells', () => {
    const wrapper = mount(<Board game={TicTacToe.startWithSize(4, 4)} />);
    console.log(wrapper.debug());
    expect(wrapper.find(Cell).length).toEqual(16);
  });
});