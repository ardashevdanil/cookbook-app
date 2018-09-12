import selectedCategory from './selectedCategory';
import { SELECT_CATEGORY } from '../../actions/selectCategory';

describe('test selectedCategory reducer', () => {

  test('should return the initial state', () => {
    expect( selectedCategory(undefined, {}) ).toEqual('recipes');
  });

  test('should handle SELECT_CATEGORY', () => {
    expect( selectedCategory('', {
      type: SELECT_CATEGORY,
      category: 'test',
    })).toEqual('test');
  });
});