import { connect } from 'react-redux';
import ResourceForm from './resource_form';
import {
  createResource,
} from '../../actions/resource_actions';

const mDTP = ({
  createResource,
});

export default connect(null, mDTP)(ResourceForm);
