import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal/modal_common_actions';
import { logout } from "../../actions/session_actions";

import LogoutConfirmPrompt from '../modal/confirm_logout';

const mSTP = (state) => state.user

const mDTP = {
  logout,
  closeModal,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
});

export default connect(
    mSTP,
    mDTP,
    mergeProps,
  )(
    LogoutConfirmPrompt
  );
