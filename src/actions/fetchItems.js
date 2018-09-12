import { receiveItems } from './receiveItems';
import { requestItems } from './requestItems';

function fetchItems (category) {

  return function (dispatch) {
    dispatch( requestItems(category) );
    
    return fetch(`/items?tag=${category}`)
      .then(
        response => response.json(),
        err => console.log('An error occured', err)
      )
      .then(
        json => {
          dispatch( receiveItems(category, json) )
        }
      )
  }
}

export default fetchItems;