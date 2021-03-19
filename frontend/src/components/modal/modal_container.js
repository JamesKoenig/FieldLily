import modalManifest from './modal_manifest';
import { closeModal } from '../../actions/old_modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mSTP = ({ui: { modal }}) => ({
  Component: modalManifest[modal],
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal);
