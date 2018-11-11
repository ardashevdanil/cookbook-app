import PropTypes from 'prop-types';
import React from 'react';
import './Comment.css';

function Comment({ avatar, date, likes, userName, text }) {
  return (
    <div className="Comment">
      <div className="Comment__user-info">
        <img
          alt="User avatar"
          className="Comment__avatar"
          src={avatar}
        />
        <div className="Comment__info">
          post by
          <div className="Comment__user-name">
            {userName}
          </div>
          <div className="Comment__date">
            {date}
          </div>
        </div>
        <div className="Comment__likes" />
      </div>
      <div className="Comment__text">
        {text}
      </div>
    </div>
  );
}

export default Comment;

Comment.propTypes = {
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
