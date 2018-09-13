import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Enzyme from 'enzyme';

import NavMenu from './NavMenu';

Enzyme.configure({ adapter: new Adapter() });

describe('test NavMenu component', () => {
	const component = Enzyme.shallow(
		<NavMenu
      history={ {} }
      location={ {} }
    />
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});

  test('shows & hides dropdown after ckick on bars icon', () => {
    let states = [];

    states.push(component.state().isDropdownShown);
    component.find(FontAwesomeIcon).at(0).simulate('click');
    states.push(component.state().isDropdownShown);
    component.find('.NavMenu__dropdown').at(0).simulate('click');
    states.push(component.state().isDropdownShown);


    expect(states).toEqual( [false, true, false] )
  })
})