import { connect } from 'react-redux';
import Resources from './resources';
import {
  fetchResources,
} from '../../actions/resource_actions';
import { openNewResourceModal }
  from '../../actions/modal/resource_modal_actions.js'

const mSTP = ({entities: { resources } }) => ({
  resources: Object.values(resources),
});

//object form, convert back to function form if it glitches, documented at:
// https://react-redux.js.org/using-react-redux/connect-mapdispatch#two-forms-of-mapdispatchtoprops
const mDTP = {
  fetchResources,
  openNewResourceModal,
};

export default connect(mSTP,mDTP)(Resources);
