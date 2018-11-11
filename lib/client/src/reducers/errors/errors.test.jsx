import errors from './errors';
import { AUTHORISATION_ERROR } from '../../actions/authorisationError';
import { SIGN_IN_ERROR } from '../../actions/signInError';

describe('test errors reducer', () => {
  test('should return the initial state', () => {
    expect(errors(undefined, {})).toEqual({
      authorisationError: false,
      signInError: false,
    });
  });

  test('should handle AUTHORISATION_ERROR', () => {
    expect(errors(undefined, {
      type: AUTHORISATION_ERROR,
    })).toEqual({
      authorisationError: true,
      signInError: false,
    });
  });

  test('should handle SIGN_IN_ERROR', () => {
    expect(errors(undefined, {
      type: SIGN_IN_ERROR,
    })).toEqual({
      authorisationError: false,
      signInError: true,
    });
  });
});
