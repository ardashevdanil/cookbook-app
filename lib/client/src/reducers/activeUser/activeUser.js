import { USER_LOGIN } from '../../actions/userLogin';
import { USER_LOGOUT } from '../../actions/userLogout';

export default function activeUser(state = 'Guest', action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;

    case USER_LOGOUT:
      return 'Guest';

    default:
      return state;
  }
}
