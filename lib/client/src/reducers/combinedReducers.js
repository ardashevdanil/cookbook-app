import { combineReducers } from 'redux';

import activeUser from './activeUser/activeUser';
import commentsByRecipe from './commentsByRecipe/commentsByRecipe';
import errors from './errors/errors';
import itemsByCategory from './itemsByCategory/itemsByCategory';
import selectedCategory from './selectedCategory/selectedCategory';

const cookbookApp = combineReducers({
  activeUser,
  errors,
  commentsByRecipe,
  itemsByCategory,
  selectedCategory,
});

export default cookbookApp;
