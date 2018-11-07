import activeUser from './activeUser';
import { USER_LOGIN } from '../../actions/userLogin';
import { USER_LOGOUT } from '../../actions/userLogout';

describe('test activeUser reducer', () => {
  test('should return the initial state', () => {
    expect(activeUser(undefined, {})).toEqual('Guest');
  });

  test('should handle USER_LOGIN', () => {
    expect(activeUser('', {
      type: USER_LOGIN,
      payload: 'test',
    })).toEqual('test');
  });

  test('should handle USER_LOGOUT', () => {
    expect(activeUser('', {
      type: USER_LOGOUT,
    })).toEqual('Guest');
  });
});
