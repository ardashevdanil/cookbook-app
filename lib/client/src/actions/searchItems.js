import { receiveItems } from './receiveItems';
import { requestItems } from './requestItems';

const searchItems = payload => (dispatch) => {
  dispatch(requestItems('search'));

  return fetch(`/items?search=${payload}`)
    .then(
      response => response.json(),
      err => console.log('An error occured', err),
    )
    .then(
      json => dispatch(receiveItems('search', json)),
    );
};

export default searchItems;
