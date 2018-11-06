import axios from 'axios';

import { userSignIn } from './userSignIn';

const pushUserData = payload => dispatch => (
  axios.post('/users/signin', { ...payload })
    .then(
      (response) => {
        if (response.status === 201) {
          dispatch(userSignIn(payload.name));
        } else {
          // FIX: dispatch an error action
          console.log('Server error');
        }
      },
      err => console.log('An error occured', err),
    )
);

export default pushUserData;
