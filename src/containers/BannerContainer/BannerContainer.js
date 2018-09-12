import { connect } from 'react-redux';

import Banner from '../../components/Banner/Banner';

const mapStateToProps = (state) => {
  return {
    items: returnCategoryIfExists(
      state.itemsByCategory,
      'recipes'
    ).splice(0, 5),
  }
}

const BannerContainer = connect(
  mapStateToProps,
)(Banner);

export default BannerContainer;

// Functions

function returnCategoryIfExists(itemsByCategory, category) {
  if (itemsByCategory[category]) {
    return [].concat( itemsByCategory[category].items )
  } else {
    return []
  }
}