import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import RecipeContainer from './RecipeContainer';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  itemsByCategory: {
    recipes: {
      items: [
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
      ],
      isFetching: false,
    },
  },
};

const store = configureStore()(initialState);

describe('test RecipeContainer component', () => {
  const component = Enzyme.mount(
    <MemoryRouter>
      <Provider store={store}>
        <RecipeContainer />
      </Provider>
    </MemoryRouter>,
  );

  test('renders correctly', () => {
    expect(component.debug()).toMatchSnapshot();
  });

  test('should return routes', () => {
    expect(component.find('div').at(0).children().length).toBe(1);
  });
});
