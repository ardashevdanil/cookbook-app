import { receiveItems } from './receiveItems';
import { requestItems } from './requestItems';

const searchItems = searchReq => (dispatch) => {
  dispatch(requestItems('search'));

  return fetch(`/items?search=${searchReq}`)
    .then(
      response => response.json(),
      err => console.log('An error occured', err),
    )
    .then(
      json => dispatch(receiveItems('search', json)),
    );
};

export default searchItems;
