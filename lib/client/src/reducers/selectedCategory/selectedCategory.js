import { SELECT_CATEGORY } from '../../actions/selectCategory';
import { history } from 'react-router-dom';

export default function selectedCategory(state = 'recipes', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload;

    default:
      return state;
  }
}
