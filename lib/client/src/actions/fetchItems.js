import axios from 'axios';

import { receiveItems } from './receiveItems';
import { requestItems } from './requestItems';

const fetchItems = payload => (dispatch) => {
  dispatch(requestItems(payload));
  return axios.get('/items', {
    params: {
      tag: payload,
    },
  })
    .then(
      response => dispatch(receiveItems(payload, response.data)),
      err => console.log('An error occured', err),
    );
};

export default fetchItems;
