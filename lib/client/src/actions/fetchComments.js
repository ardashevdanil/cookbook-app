import axios from 'axios';

import { receiveComments } from './receiveComments';
import { requestComments } from './requestComments';

const fetchComments = payload => (dispatch) => {
  dispatch(requestComments(payload));
  return axios.get('/comments', {
    params: {
      recipe: payload,
    },
  })
    .then(
      response => dispatch(receiveComments(payload, response.data)),
      err => console.log('An error occured', err),
    );
};

export default fetchComments;
