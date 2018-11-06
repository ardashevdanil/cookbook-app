import { connect } from 'react-redux';

import checkUserPassword from '../../actions/checkUserPassword';
import pushUserData from '../../actions/pushUserData';
import UserLogin from '../../components/UserLogin/UserLogin';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  onLogin: payload => dispatch(checkUserPassword(payload)),
  onSignIn: payload => dispatch(pushUserData(payload)),
});

const UserLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLogin);

export default UserLoginContainer;
