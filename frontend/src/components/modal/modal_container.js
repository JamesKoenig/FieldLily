import modalManifest from './modal_manifest';
import { closeModal } from '../../actions/old_modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';
import { ModalUtil } from '../../util/modal_util';

const mSTP = ({ui: { modal }}) => ({
  Component: modalManifest[modal],
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  modalUtil: new ModalUtil("modal-background",dispatch),
})

export default connect(mSTP, mDTP)(Modal);
