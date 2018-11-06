import { RECEIVE_COMMENTS } from '../../actions/receiveComments';
import { REQUEST_COMMENTS } from '../../actions/requestComments';

function comments(
  state = {
    isFetching: false,
    comments: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        comments: action.comments,
        lastUpdated: action.receivedAt,
      });

    default:
      return state;
  }
}

function commentsByCategory(state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
    case REQUEST_COMMENTS:
      return {
        ...state,
        ...{ [action.payload]: comments(state[action.payload], action) },
      };

    default:
      return state;
  }
}

export default commentsByCategory;
