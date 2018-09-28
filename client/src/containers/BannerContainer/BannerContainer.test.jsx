import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import BannerContainer from './BannerContainer';

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

describe('test BannerContainer component', () => {
  test('should pass recipes items', () => {
    const component = mountComponentWithStore(
      BannerContainer,
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
    initialState.itemsByCategory = { someCategory: '' };
    const component = mountComponentWithStore(
      BannerContainer,
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
    <MemoryRouter>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </MemoryRouter>,
  );

  return wrapper.find(Component);
}
