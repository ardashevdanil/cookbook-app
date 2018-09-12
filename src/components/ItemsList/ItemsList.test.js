import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import ItemsList from './ItemsList';

Enzyme.configure({ adapter: new Adapter() });

describe('test ItemsList component', () => {
  const testItem = () => null;
	const component = Enzyme.shallow(
		<ItemsList
      isFetching={ false }
      item = { testItem }
      items={[
        {
          comments: 0,
          cookingTime: 0,
          description: '',
          difficult: '',
          id: 0,
          img: '',
          ingridients: ['', ''],
          name: 'test1',
          videoId: '',
          watched: 0,
        },
      ]}
      history={ {} }
      location={{ pathname: '/test' }}
      onUpdate={ () => null }
      selectedCategory='home'
    />
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});

  test('should render items', () => {
    expect(component.find(testItem).length).toBe(1);
  });

  test('should render empty list if there aren\'t items', () => {
    component.setProps({ items: [] });

    expect(component.find('div').at(1).text()).toBe('No Matches');
  })
})