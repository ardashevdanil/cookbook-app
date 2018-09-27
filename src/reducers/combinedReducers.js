import { combineReducers } from 'redux';

import itemsByCategory from './itemsByCategory/itemsByCategory';
import selectedCategory from './selectedCategory/selectedCategory';

const cookbookApp = combineReducers({
  itemsByCategory,
  selectedCategory,
});

export default cookbookApp;
