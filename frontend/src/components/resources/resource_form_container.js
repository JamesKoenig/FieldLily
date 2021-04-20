import { connect } from 'react-redux';
import ResourceForm from './resource_form';
import {
  createResource,
  receiveNewResource,
  updateResource,
} from '../../actions/resource_actions';
import { closeModal }
  from '../../actions/modal/modal_common_actions';

const mSTP = (state) => {
  const newResource = state.entities.resources.new;
  const { habitId, resourceId } = state.ui.modal.misc;
  const editResource = resourceId ?
    state.entities.resources.all[resourceId] : null;
  return {
    newResource,
    habitId,
    editResource,
  }
}

const mDTP = ({
  createResource,
  receiveNewResource,
  updateResource,
  closeModal,
});

export default connect(mSTP, mDTP)(ResourceForm);
