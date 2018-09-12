import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Recipe from '../../components/Recipe/Recipe';

function RecipeContainer(props) {

  const recipeRoutes = props.items.map( (item, index) => {
    return (
      <Route
        key={ index }
        path={ `/cookbook-app/recipe/${item.id}` }
        render={ (props) => {
          return <Recipe {...props} content={ item } />
        }}
      />
    );
  });

	return(
		<div>
      { recipeRoutes }
    </div>
	);
}

export default withRouter(
  connect(
    (state) => ({ items: returnCategoryIfExists(state.itemsByCategory, 'recipes') })
  )(RecipeContainer)
);

RecipeContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

// Functions

function returnCategoryIfExists(itemsByCategory, category) {
  if (itemsByCategory[category]) {
    return [].concat( itemsByCategory[category].items )
  } else {
    return []
  }
}