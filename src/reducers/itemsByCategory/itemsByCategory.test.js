import { REQUEST_ITEMS } from '../../actions/requestItems';
import { RECEIVE_ITEMS } from '../../actions/receiveItems';
import itemsByCategory from './itemsByCategory';

describe('test itemsByCategory reducer', () => {
  test('should return the initial state', () => {
    expect(itemsByCategory(undefined, {})).toEqual({});
  });

  test('should handle REQUEST_ITEMS', () => {
    const action = {
      type: REQUEST_ITEMS,
      category: 'test',
    };

    expect(itemsByCategory(undefined, action))
      .toEqual({
        test: {
          isFetching: true,
          items: [],
        },
      });
  });

  test('should handle RECEIVE_ITEMS', () => {
    const state = {
      test: {
        isFetching: true,
        items: [],
      },
    };
    const action = {
      type: RECEIVE_ITEMS,
      category: 'test',
      items: ['item'],
      receivedAt: 123,
    };

    expect(itemsByCategory(state, action))
      .toEqual({
        test: {
          isFetching: false,
          items: ['item'],
          lastUpdated: 123,
        },
      });
  });
});
