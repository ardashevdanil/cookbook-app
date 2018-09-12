import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
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
})