import { connect } from 'react-redux';

import ItemsList from '../../components/ItemsList/ItemsList';
import { selectCategory } from '../../actions/selectCategory';

const mapStateToProps = state => ({
  isFetching: returnCategoryIfExists(
    state.itemsByCategory,
    state.selectedCategory,
  ).isFetching,
  items: returnCategoryIfExists(
    state.itemsByCategory,
    state.selectedCategory,
  ).items,
  selectedCategory: state.selectedCategory,
});

const mapDispatchToProps = dispatch => ({
  onUpdate: category => dispatch(selectCategory(category)),
});

const ItemsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemsList);

export default ItemsListContainer;

// Functions

function returnCategoryIfExists(itemsByCategory, category) {
  if (itemsByCategory[category]) {
    return itemsByCategory[category];
  }

  return {
    isFetching: false,
    items: [],
  };
}
