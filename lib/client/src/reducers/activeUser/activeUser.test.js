import activeUser from './activeUser';
import { USER_LOGIN } from '../../actions/selectCategory';

describe('test activeUser reducer', () => {
  test('should return the initial state', () => {
    expect(activeUser(undefined, {})).toEqual('recipes');
  });

  test('should handle USER_LOGIN', () => {
    expect(activeUser('', {
      type: USER_LOGIN,
      payload: 'test',
    })).toEqual('test');
  });
});
