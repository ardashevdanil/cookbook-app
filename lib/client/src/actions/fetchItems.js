import { receiveItems } from './receiveItems';
import { requestItems } from './requestItems';

const fetchItems = payload => (dispatch) => {
  dispatch(requestItems(payload));
  return fetch(`/items?tag=${payload}`)
    .then(
      response => response.json(),
      err => console.log('An error occured', err),
    )
    .then(
      json => dispatch(receiveItems(payload, json)),
    );
};

export default fetchItems;
