import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import {
  openLoginModal,
  openSignupModal,
} from '../../actions/modal/session_modal_actions';
import { openConfirmLogoutModal } from '../../actions/modal/confirmation_modal_actions'

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = {
  openLoginModal,
  openSignupModal,
  openConfirmLogoutModal
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
