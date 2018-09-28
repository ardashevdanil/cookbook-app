import { RECEIVE_ITEMS } from '../../actions/receiveItems';
import { REQUEST_ITEMS } from '../../actions/requestItems';

function items(
  state = {
    isFetching: false,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt,
      });

    default:
      return state;
  }
}

function itemsByCategory(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
    case REQUEST_ITEMS:
      return {
        ...state,
        ...{ [action.category]: items(state[action.category], action) },
      };

    default:
      return state;
  }
}

export default itemsByCategory;
