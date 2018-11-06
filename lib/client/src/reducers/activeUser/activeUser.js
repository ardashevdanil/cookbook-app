import { USER_LOGIN } from '../../actions/userLogin';

export default function activeUser(state = 'Guest', action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;

    default:
      return state;
  }
}
