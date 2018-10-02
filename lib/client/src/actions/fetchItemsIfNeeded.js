import fetchItems from './fetchItems';

const fetchItemsIfNeeded = category => (dispatch, getState) => {
  if (shouldFetchItems(getState(), category)) {
    return dispatch(fetchItems(category));
  }
  // Let the calling code know there's nothing to wait for
  return Promise.resolve();
};

export default fetchItemsIfNeeded;

// Functions

function shouldFetchItems(state, category) {
  const items = state.itemsByCategory[category];

  if (!items) {
    return true;
  }

  if (items.isFetching) {
    return false;
  }

  return items.didInvalidate;
}
