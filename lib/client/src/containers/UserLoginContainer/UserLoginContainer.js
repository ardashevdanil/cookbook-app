import { connect } from 'react-redux';

import checkUserPassword from '../../actions/checkUserPassword';
import pushUserData from '../../actions/pushUserData';
import UserLogin from '../../components/UserLogin/UserLogin';
import { userLogout } from '../../actions/userLogout';

const mapStateToProps = state => ({
  authorisationError: state.errors.authorisationError,
  signInError: state.errors.signInError,
  user: state.activeUser,
});

const mapDispatchToProps = dispatch => ({
  onLogin: payload => dispatch(checkUserPassword(payload)),
  onLogout: () => dispatch(userLogout()),
  onSignIn: payload => dispatch(pushUserData(payload)),
});

const UserLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLogin);

export default UserLoginContainer;
