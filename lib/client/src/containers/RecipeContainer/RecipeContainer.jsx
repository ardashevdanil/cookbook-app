import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import Recipe from '../../components/Recipe/Recipe';

function RecipeContainer({ items }) {
  const recipeRoutes = items.map(item => (
    <Route
      key={item.id}
      path={`/cookbook-app/recipe/${item.id}`}
      render={props => <Recipe {...props} content={item} />}
    />
  ));

  return (
    <div>
      {recipeRoutes}
    </div>
  );
}

export default withRouter(
  connect(
    state => ({ items: returnCategoryIfExists(state.itemsByCategory, 'recipes') }),
  )(RecipeContainer),
);

RecipeContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

// Functions

function returnCategoryIfExists(itemsByCategory, category) {
  if (itemsByCategory[category]) {
    return [...itemsByCategory[category].items];
  }

  return [];
}
