import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('test Footer component', () => {
	const component = Enzyme.shallow(
		<Footer />
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
})