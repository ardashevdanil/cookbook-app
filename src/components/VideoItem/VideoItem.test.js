import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import VideoItem from './VideoItem';

Enzyme.configure({ adapter: new Adapter() });

describe('test VideoItem component', () => {
  const pushCart = jest.fn();
	const component = Enzyme.shallow(
		<VideoItem
      content={{
        name: 'test',
        videoId: '',
      }}
    />
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});
})