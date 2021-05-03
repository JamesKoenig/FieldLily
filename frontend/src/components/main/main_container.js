import { connect } from 'react-redux';
import Main from './main';

import {
  putMainToSleep,
  detatchMain,
} from "../../actions/display_actions";

const mSTP = ({ui: {display}}, {match: {params}}) => ({
  ...display,
  status: Object.keys(params).length === 0 ? "dormant" : "active",
})

const mDTP = {
  putMainToSleep,
  detatchMain,
}

export default connect(mSTP,mDTP)(Main);
