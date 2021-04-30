import { connect } from 'react-redux';
import Main from './main';

import {
  putMainToSleep,
  detatchMain,
} from "../../actions/display_actions";

const mSTP = ({ui: {display}}) => ({
  ...display,
})

const mDTP = {
  putMainToSleep,
  detatchMain,
}

export default connect(mSTP,mDTP)(Main);
