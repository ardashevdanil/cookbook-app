import axios from 'axios';

import pushUserImage from './pushUserImage';
import { signInError } from './signInError';
import { userSignIn } from './userSignIn';

const pushUserData = payload => (dispatch) => {
  const {
    img,
    name,
    password,
  } = { ...payload };

  dispatch(pushUserImage(img));

  return axios.post('/users/signin', {
    img: img.name,
    name,
    password,
  })
    .then(
      (response) => {
        if (response.status === 201) {
          dispatch(userSignIn(payload.name));
        } else {
          // FIX: dispatch an error action
          console.log('Server error');
        }
      },
      (err) => {
        if (err.response.status === 401) {
          dispatch(signInError());
        } else {
          console.log(err);
        }
      },
    );
};

export default pushUserData;
