import { AUTHORISATION_ERROR } from '../../actions/authorisationError';

export default function errors(
  state = {
    authorisationError: false,
  },
  action,
) {
  switch (action.type) {
    case AUTHORISATION_ERROR:
      return { ...{ authorisationError: true } };

    default:
      return state;
  }
}
