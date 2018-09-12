import { SELECT_CATEGORY } from '../../actions/selectCategory';

export default function selectedCategory(state='recipes', action) {
  switch (action.type) {

    case SELECT_CATEGORY:
      return action.category
    
    default:
      return state
  }
}