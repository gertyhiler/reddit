import React from "react";
import { Dropdown } from "../Dropdown"
import { arrayLiItem } from "../exemples/menuDropdownList";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown {...{onClick: ()=> console.log('object'), arrayLiItem, btnRect: [0, 1]}}/>);
    expect(wrapper).toBeDefined()
  })
});