import { connect } from 'react-redux';
import ResourceForm from './resource_form';
import {
  createResource,
} from '../../actions/resource_actions';

const mSTP = state => ({
  resource: {
    title: '',
    description: '' },
});

const mDTP = ({
  createResource,
});

export default connect(mSTP, mDTP)(ResourceForm);
