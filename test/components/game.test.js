import {expect} from 'chai'
import React from 'react'
import Game from '../../src/components/game'
import {shallow} from 'enzyme'

describe("<Game />", ()=>{
    "use strict";
    it('renders one <h1> tag', ()=>{
        const wrapper = shallow(<Game />);
        expect(wrapper).to.exist;
    });
})
