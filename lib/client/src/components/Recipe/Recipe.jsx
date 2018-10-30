import PropTypes from 'prop-types';
import React from 'react';
import './Recipe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Recipe({ content }) {
  const ingridients = content.ingridients.split('\\').map((item, index) => (
    <p key={index}>
      {item}
    </p>
  ));

  return (
    <div className="Recipe">
      <div className="Recipe__img">
        <img
          alt={content.name}
          src={content.img}
        />
      </div>
      <div className="Recipe__description">
        <div className="Recipe__heading">
          {content.name}
        </div>
        <div className="Recipe__stats">
          <FontAwesomeIcon icon={faClock} />
          {content.cookingTime}
          mins&#160;
          <FontAwesomeIcon icon={faUtensils} />
          &#160;
          {content.difficult}
        </div>
        <div className="Recipe__text">
          {ingridients}
          <div className="Recipe__heading Recipe__heading_small">
            Directions
          </div>
          {content.directions}
        </div>
      </div>
    </div>
  );
}

export default Recipe;

Recipe.propTypes = {
  content: PropTypes.shape({
    cookingTime: PropTypes.number.isRequired,
    difficult: PropTypes.string.isRequired,
    directions: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    ingridients: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
