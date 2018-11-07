import PropTypes from 'prop-types';
import React from 'react';
import './UserLogin.css';

import UserLogout from '../UserLogout/UserLogout';

class UserLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      loginPassword: '',
      signInPassword: '',
      username: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleInputChange(field, e) {
    const nextState = {};

    nextState[field] = e.target.value;
    this.setState(nextState);
  }

  handleLogin() {
    const { loginPassword, login } = { ...this.state };
    const { onLogin } = { ...this.props };

    if (login === '' || loginPassword === '') return;

    onLogin({
      name: login,
      password: loginPassword,
    });
    this.setState({
      login: '',
      loginPassword: '',
    });
  }

  handleSignIn() {
    const { signInPassword, username } = { ...this.state };
    const { onSignIn } = { ...this.props };

    if (username === '' || signInPassword === '') return;

    onSignIn({
      name: username,
      password: signInPassword,
    });
    this.setState({
      name: '',
      password: '',
    });
  }

  render() {
    const {
      login,
      loginPassword,
      signInPassword,
      username,
    } = { ...this.state };
    const {
      authorisationError,
      onLogout,
      user,
    } = { ...this.props };

    if (user !== 'Guest') {
      return (
        <UserLogout
          onLogout={onLogout}
          user={user}
        />
      );
    }

    return (
      <div className="UserLogin">
        <div className="UserLogin__form">
          <div className="UserLogin__heading">
            Login
          </div>
          Login for LEMON
          <input
            className="UserLogin__input"
            onChange={e => this.handleInputChange('login', e)}
            placeholder="login"
            type="text"
            value={login}
          />
          <input
            className="UserLogin__input"
            onChange={e => this.handleInputChange('loginPassword', e)}
            placeholder="password"
            type="text"
            value={'*'.repeat(loginPassword.length)}
          />
          <div
            className={authorisationError ? 'UserLogin__error' : 'UserLogin__error_hidden'}
          >
            Unable to login. Check login or password.
          </div>
          <div
            className="UserLogin__button"
            onClick={this.handleLogin}
          >
            LOGIN
          </div>
          <div className="UserLogin__hint">
            Dont have an account? Sign in
          </div>
        </div>
        <div className="UserLogin__form">
          <div className="UserLogin__heading">
            Sign in
          </div>
          Sign in for LEMON
          <input
            className="UserLogin__input"
            onChange={e => this.handleInputChange('username', e)}
            placeholder="username"
            type="text"
            value={username}
          />
          <input
            className="UserLogin__input"
            onChange={e => this.handleInputChange('signInPassword', e)}
            placeholder="password"
            type="text"
            value={'*'.repeat(signInPassword.length)}
          />
          <div
            className="UserLogin__button"
            onClick={this.handleSignIn}
          >
            SIGN UP
          </div>
          <div className="UserLogin__hint">
            By joing LEMON you agree to our terms of service
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;

UserLogin.propTypes = {
  authorisationError: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};
