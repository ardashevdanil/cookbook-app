import axios from 'axios';

import { receiveItems } from './receiveItems';
import { requestItems } from './requestItems';

const searchItems = payload => (dispatch) => {
  dispatch(requestItems('search'));
  return axios.get('/items', {
    params: {
      search: payload,
    },
  })
    .then(
      response => dispatch(receiveItems('search', response.data)),
      err => console.log('An error occured', err),
    );
};

export default searchItems;
