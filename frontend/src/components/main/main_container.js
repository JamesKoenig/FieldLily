import { connect } from 'react-redux';
import Main from './main';

import {
  putMainToSleep,
} from "../../actions/display_actions";

const mSTP = ({ui: {display}}) => ({
  ...display,
})

const mDTP = {
  putMainToSleep,
}

export default connect(mSTP,mDTP)(Main);
