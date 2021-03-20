import modalManifest from './modal_manifest';
import {
  closeModal,
  modalFadeAndClose,
} from '../../actions/modal/modal_common_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mSTP = ({session: { isAuthenticated},
               ui: { newModal: { type, subtype }}}) => ({
  Component: modalManifest(type, subtype),
  autoClose: type === "session" ? isAuthenticated : false,
});

const mDTP = dispatch => ({
  modalFadeAndClose: modalId => dispatch(modalFadeAndClose(modalId)),
})

export default connect(mSTP, mDTP)(Modal);
