import { connect } from 'react-redux';

import Banner from '../../components/Banner/Banner';

const mapStateToProps = state => ({
  items: returnCategoryIfExists(
    state.itemsByCategory,
    'recipes',
  ).splice(0, 5),
});

const BannerContainer = connect(
  mapStateToProps,
)(Banner);

export default BannerContainer;

// Functions

function returnCategoryIfExists(itemsByCategory, category) {
  if (itemsByCategory[category]) {
    return [...itemsByCategory[category].items];
  }

  return [];
}
