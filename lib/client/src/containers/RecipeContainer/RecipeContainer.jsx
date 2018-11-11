import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import CommentsList from '../../components/CommentsList/CommentsList';
import fetchComments from '../../actions/fetchComments';
import Recipe from '../../components/Recipe/Recipe';

function RecipeContainer({ comments, dispatch, items, user }) {
  const recipeRoutes = items.map(item => (
    <Route
      key={item.id}
      path={`/recipe/${item.id}`}
      render={props => (
        <div>
          <Recipe {...props} content={item} />
          <CommentsList
            {...props}
            comments={comments[item.id] ? comments[item.id].comments : []}

            // FIX: should use socket.io for fetching comments
            fetchComments={() => dispatch(fetchComments(item.id))}
            recipe={item.id}
            user={user}
          />
        </div>
      )}
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
    state => ({
      comments: state.commentsByRecipe,
      items: state.itemsByCategory.recipes ? state.itemsByCategory.recipes.items : [],
      user: state.activeUser,
    }),
  )(RecipeContainer),
);

RecipeContainer.propTypes = {
  comments: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
