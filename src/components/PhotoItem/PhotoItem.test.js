import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import PhotoItem from './PhotoItem';

Enzyme.configure({ adapter: new Adapter() });

describe('test PhotoItem component', () => {
  const pushCart = jest.fn();
	const component = Enzyme.shallow(
		<PhotoItem
      content={{
        img: '',
        name: 'test',
      }}
    />
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});

  /*
  test('calls pushCart after click on the cart button', () => {
    component.find('div').at(6).simulate('click');

    expect(pushCart.mock.calls.length).toBe(1);
  })
  */
})