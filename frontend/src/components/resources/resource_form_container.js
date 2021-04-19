import { connect } from 'react-redux';
import ResourceForm from './resource_form';
import {
  createResource,
  receiveNewResource,
} from '../../actions/resource_actions';

const mSTP = (state) => {
  const newResource = state.entities.resources.new;
  const { habitId } = state.ui.modal.misc;
  const resourceId = null; //change when edit button is added
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
});

export default connect(mSTP, mDTP)(ResourceForm);
