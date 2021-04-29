import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal/modal_common_actions';
import { logout } from "../../actions/session_actions";

import LogoutConfirmPrompt from './confirm_logout';

const mSTP = (state) => ({
  user: state.session.user
})

const mDTP = {
  logout,
  closeModal,
}

export default connect(
    mSTP,
    mDTP,
  )(
    LogoutConfirmPrompt
  );
