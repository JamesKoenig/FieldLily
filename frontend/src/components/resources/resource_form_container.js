import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ResourceForm from './resource_form';
import {
  createResource,
  receiveNewResource,
} from '../../actions/resource_actions';

const mSTP = (state, ownProps) => {
  const { title, description } = state.entities.resources.new;
  const habitId = ownProps.match.params.habitId;
  const resourceId = null;
  const resource = resourceId ?
    state.entities.resources.all[resourceId] : null;
  return {
    title,
    description,
    habitId,
    resource,
  }
}

const mDTP = ({
  createResource,
  receiveNewResource,
});

export default withRouter(connect(mSTP, mDTP)(ResourceForm));
