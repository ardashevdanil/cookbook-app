import PropTypes from 'prop-types';
import React from 'react';
import './PhotoItem.css';

function PhotoItem({ content }) {
  return (
    <div className="PhotoItem">
      <div className="PhotoItem__img">
        <img
          alt={content.name}
          src={content.img}
        />
      </div>
    </div>
  );
}

PhotoItem.propTypes = {
  content: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PhotoItem;
