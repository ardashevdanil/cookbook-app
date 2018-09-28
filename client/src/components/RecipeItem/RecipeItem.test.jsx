import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import RecipeItem from './RecipeItem';

Enzyme.configure({ adapter: new Adapter() });

describe('test RecipeItem component', () => {
  const push = jest.fn();
  const component = Enzyme.shallow(
    <RecipeItem
      content={{
        cookingTime: 0,
        img: '',
        name: 'test',
      }}
      history={{ push }}
    />,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  test('calls history.push after click on self', () => {
    component.find('.RecipeItem').at(0).simulate('click');

    expect(push.mock.calls.length).toBe(1);
  });
});
