import { connect } from 'react-redux';
import HabitBox from './habit_box';
import { receiveActiveElement } from '../../actions/display_actions';

const mSTP = ({ui: {display: { mainStatus, activeElement }}}, {_id: id}) => ({
  mainStatus,
  isActive: (activeElement === id)
})

const mDTP = {
  receiveActiveElement,
}

const mergeProps = (stateProps,dispatchProps,ownProps) => {
  const id = ownProps._id;
  const { mainStatus } = stateProps;
  const { receiveActiveElement } = dispatchProps;

  /* future proofing so people can add things to mDTP/mSTP without worrying;
   *  though, I could've avoided part of doing this segment of code by
   *   overwriting the value of receiveActiveElement, but I felt keeping the
   *    behavior of the function consistent with the ver in display_actions is
   *     better to avoid confusion.
   */
  const newDispatchProps = {...dispatchProps};
  delete newDispatchProps.receiveActiveElement;
  const newStateProps = {...stateProps};
  delete newStateProps.mainStatus;

  function setSelfAsActive() {
    if(mainStatus !== "detatched")
      receiveActiveElement(id);
  }

  return {
    ...newDispatchProps,
    ...newStateProps,
    ...ownProps,
    setSelfAsActive,
  }
}

export default connect(mSTP, mDTP, mergeProps)(HabitBox);
