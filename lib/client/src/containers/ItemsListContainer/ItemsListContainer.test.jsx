import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import ItemsListContainer from './ItemsListContainer';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  itemsByCategory: {
    test1: {
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
    test2: {
      items: [
        {
          comments: 0,
          cookingTime: 0,
          description: '',
          difficult: '',
          id: 0,
          img: '',
          ingridients: ['', ''],
          name: 'test2',
          videoId: '',
          watched: 0,
        },
      ],
      isFetching: true,
    },
  },
  selectedCategory: 'test1',
};

describe('test ItemsListContainer component', () => {
  test('should pass items by category', () => {
    const component = mountComponentWithStore(
      ItemsListContainer,
      initialState,
      { item: () => null },
    );

    expect(component.children().at(0).props().items)
      .toEqual(
        [
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
      );
  });

  test('should pass empty array if there isn\'t such category', () => {
    initialState.selectedCategory = 'someCategory';
    const component = mountComponentWithStore(
      ItemsListContainer,
      initialState,
      { item: () => null },
    );

    expect(component.children().at(0).props().items).toEqual([]);
  });
});

// Functions

function mountComponentWithStore(Component, state, props) {
  const store = configureStore()(state);
  const wrapper = Enzyme.mount(
    <Provider store={store}>
      <Component {...props} />
    </Provider>,
  );

  return wrapper.find(Component);
}
