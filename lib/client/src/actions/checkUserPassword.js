import axios from 'axios';

import { userLogin } from './userLogin';

const checkUserPassword = payload => dispatch => (
  axios.post('/users/login', { ...payload })
    .then(
      (response) => {
        if (response.status === 202) {
          dispatch(userLogin(payload.name));
        } else {
          console.log('Server error');
        }
      },
      (err) => {
        switch (err.response.status) {
          case 401:
            // FIX: add error action
            console.log('Wrong password');
            break;

          default:
            console.log(err);
        }
      },
    )
);

export default checkUserPassword;
