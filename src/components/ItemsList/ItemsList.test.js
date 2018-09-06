import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Item from '../Item/Item';
import ItemsList from './ItemsList';

Enzyme.configure({ adapter: new Adapter() });

describe('test ItemsList component', () => {
	const component = Enzyme.shallow(
		<ItemsList
      isFetching={ false }
      items={[
        {
          img: '',
          name: {eng: 'test1', rus: 'тест1'},
          price: {usd: 0, rub: 0},
          tags: ['test1']
        },
        {
          img: '',
          name: {eng: 'test2', rus: 'тест2'},
          price: {usd: 0, rub: 0},
          tags: ['test2']
        },
      ]}
      currency='usd'
      inCart={ false }
      location={{ pathname: '/test' }}
      onUpdate={ () => null }
      pushCart={ () => null }
      selectedCategory='home'
    />
	);

	test('renders correctly', () => {
		expect(component.debug()).toMatchSnapshot();
	});

  test('should render items', () => {
    expect(component.find(Item).length).toBe(2);
  });

  test('should render empty list if there aren\'t items', () => {
    component.setProps({ items: [] });

    expect(component.find('div').at(1).text()).toBe('No Matches');
  })
})