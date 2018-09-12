import fetchItems from './fetchItems';

function fetchItemsIfNeeded(category) {

  return (dispatch, getState) => {

    if ( shouldFetchItems(getState(), category) ) {
      return dispatch( fetchItems(category) );
    } else {
      // Let the calling code know there's nothing to wait for
      return Promise.resolve()
    }
  }
}

export default fetchItemsIfNeeded;

// Functions

function shouldFetchItems(state, category) {

  const items = state.itemsByCategory[category];

  if (!items) {
    return true
  } else if (items.isFetching) {
    return false
  } else {
    return items.didInvalidate
  }
}