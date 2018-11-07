import axios from 'axios';

import { userLogin } from './userLogin';
import { authorisationError } from './authorisationError';

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
            dispatch(authorisationError());
            break;

          default:
            console.log(err);
        }
      },
    )
);

export default checkUserPassword;
