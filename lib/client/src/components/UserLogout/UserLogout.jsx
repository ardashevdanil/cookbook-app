import PropTypes from 'prop-types';
import React from 'react';
import './UserLogout.css';

function UserLogout({ onLogout, user }) {
  return (
    <div className="UserLogout">
      Hello, &nbsp;
      {user}
      !
      <div
        className="UserLogout__button"
        onClick={onLogout}
        role="button"
      >
        LOGOUT
      </div>
    </div>
  );
}

export default UserLogout;

UserLogout.propTypes = {
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};
