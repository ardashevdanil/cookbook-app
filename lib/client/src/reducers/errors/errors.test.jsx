import errors from './errors';
import { AUTHORISATION_ERROR } from '../../actions/authorisationError';

describe('test errors reducer', () => {
  test('should return the initial state', () => {
    expect(errors(undefined, {})).toEqual({
      authorisationError: false,
    });
  });

  test('should handle AUTHORISATION_ERROR', () => {
    expect(errors(undefined, {
      type: AUTHORISATION_ERROR,
    })).toEqual({
      authorisationError: true,
    });
  });
});
