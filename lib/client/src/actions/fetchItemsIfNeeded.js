import fetchItems from './fetchItems';

const fetchItemsIfNeeded = payload => (dispatch, getState) => {
  if (shouldFetchItems(getState(), payload)) {
    return dispatch(fetchItems(payload));
  }
  // Let the calling code know there's nothing to wait for
  return Promise.resolve();
};

export default fetchItemsIfNeeded;

// Functions

function shouldFetchItems(state, payload) {
  const items = state.itemsByCategory[payload];

  if (!items) {
    return true;
  }

  if (items.isFetching) {
    return false;
  }

  return items.didInvalidate;
}
