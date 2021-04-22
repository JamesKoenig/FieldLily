import { connect } from 'react-redux';
import Main from './main';

const mSTP = ({ui: {display}}) => ({
  ...display,
})

export default connect(mSTP)(Main);
