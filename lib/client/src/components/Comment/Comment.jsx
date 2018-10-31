import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import './Comment.css';

function Comment() {
  return (
    <div className="Comment">
      <div className="Comment__user-info">
        <div className="Comment__avatar" />
        <div className="Comment__info">
          post by
          <div className="Comment__user-name">
            Smuckersreg Toppings
          </div>
          <div className="Comment__date">
            6/10/2014
          </div>
        </div>
        <div className="Comment__likes">
          15
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
      </div>
      <div className="Comment__text">
        Thanks for the ricipe
      </div>
    </div>
  );
}

export default Comment;
