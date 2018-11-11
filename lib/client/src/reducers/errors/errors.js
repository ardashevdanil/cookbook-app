import { AUTHORISATION_ERROR } from '../../actions/authorisationError';
import { SIGN_IN_ERROR } from '../../actions/signInError';

export default function errors(
  state = {
    authorisationError: false,
    signInError: false,
  },
  action,
) {
  switch (action.type) {
    case AUTHORISATION_ERROR:
      return {
        ...state,
        ...{ authorisationError: true },
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        ...{ signInError: true },
      };

    default:
      return state;
  }
}
