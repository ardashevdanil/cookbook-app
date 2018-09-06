import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Banner from './Banner';

Enzyme.configure({ adapter: new Adapter() });

describe('test Banner component', () => {
	const component = Enzyme.shallow(
		<Banner />
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
})