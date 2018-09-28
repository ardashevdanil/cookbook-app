import PropTypes from 'prop-types';
import React from 'react';
import './RecipeItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
} from '@fortawesome/free-regular-svg-icons';

function RecipeItem({ content, history }) {
  const handleClick = () => {
    history.push(`/cookbook-app/recipe/${content.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="RecipeItem"
      onClick={handleClick}
      role="button"
    >
      <div className="RecipeItem__img">
        <img
          alt={content.name}
          src={content.img}
        />
      </div>
      <div className="RecipeItem__description">
        <div className="RecipeItem__name">
          {content.name}
        </div>
        <div className="RecipeItem__stats">
          <FontAwesomeIcon icon={faClock} />
          {content.cookingTime}
          mins
        </div>
      </div>
    </div>
  );
}

RecipeItem.propTypes = {
  content: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cookingTime: PropTypes.number.isRequired,
  }).isRequired,
  history: PropTypes.object.isRequired,
};

export default RecipeItem;
