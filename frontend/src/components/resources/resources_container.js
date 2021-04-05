import { connect } from 'react-redux';
import Resources from './resources';
import {
  fetchResources,
} from '../../actions/resource_actions';

const mSTP = ({entities: { resources: {all: resources } } }) => ({
  resources: Object.values(resources),
});

//object form, convert back to function form if it glitches, documented at:
// https://react-redux.js.org/using-react-redux/connect-mapdispatch#two-forms-of-mapdispatchtoprops
const mDTP = {
  fetchResources,
};

export default connect(mSTP,mDTP)(Resources);
