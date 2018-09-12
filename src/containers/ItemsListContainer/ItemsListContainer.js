import { connect } from 'react-redux';

import ItemsList from '../../components/ItemsList/ItemsList';
import { selectCategory } from '../../actions/selectCategory';

const mapStateToProps = (state) => {
  return {
    isFetching: returnCategoryIfExists(
      state.itemsByCategory,
      state.selectedCategory
    ).isFetching,

    items: returnCategoryIfExists(
      state.itemsByCategory,
      state.selectedCategory
    ).items,
    selectedCategory: state.selectedCategory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (category) => {
      dispatch( selectCategory(category) )
    },
  }
}

const ItemsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);

export default ItemsListContainer;

// Functions

function returnCategoryIfExists(itemsByCategory, category) {
  if (itemsByCategory[category]) {
    return itemsByCategory[category]
  } else {
    return {
      isFetching: false,
      items: [],
    }
  }
}