import { REQUEST_COMMENTS } from '../../actions/requestComments';
import { RECEIVE_COMMENTS } from '../../actions/receiveComments';
import commentsByRecipe from './commentsByRecipe';

describe('test commentsByRecipe reducer', () => {
  test('should return the initial state', () => {
    expect(commentsByRecipe(undefined, {})).toEqual({});
  });

  test('should handle REQUEST_COMMENTS', () => {
    const action = {
      type: REQUEST_COMMENTS,
      payload: '1',
    };

    expect(commentsByRecipe(undefined, action))
      .toEqual({
        1: {
          isFetching: true,
          comments: [],
        },
      });
  });

  test('should handle RECEIVE_COMMENTS', () => {
    const state = {
      1: {
        isFetching: true,
        comments: [],
      },
    };
    const action = {
      type: RECEIVE_COMMENTS,
      payload: '1',
      comments: ['item'],
      receivedAt: 123,
    };

    expect(commentsByRecipe(state, action))
      .toEqual({
        1: {
          isFetching: false,
          comments: ['item'],
          lastUpdated: 123,
        },
      });
  });
});
