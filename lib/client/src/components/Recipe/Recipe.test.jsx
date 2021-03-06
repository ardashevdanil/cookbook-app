import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Recipe from './Recipe';

Enzyme.configure({ adapter: new Adapter() });

describe('test Recipe component', () => {
  const component = Enzyme.shallow(
    <Recipe
      content={
        {
          comments: 0,
          cookingTime: 0,
          description: '',
          difficult: '',
          directions: '',
          id: 0,
          img: '',
          ingridients: 'a\\b',
          name: 'test1',
          watched: 0,
        }
      }
    />,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });
});
