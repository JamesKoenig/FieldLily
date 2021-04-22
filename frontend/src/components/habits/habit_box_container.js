import { connect } from 'react-redux';
import HabitBox from './habit_box';
import { receiveActiveElement } from '../../actions/display_actions';

const mDTP = {
  receiveActiveElement,
}

const mergeProps = (stateProps,dispatchProps,ownProps) => {
  const id = ownProps._id;
  const { receiveActiveElement } = dispatchProps;

  /* future proofing so people can add things to mDTP without worrying
   *  though, I could've avoided doing this segment of code by overwriting
   *   the value of receiveActiveElement, but I felt keeping the behavior
   *    of the function consistent with the ver in display_actions is better 
   *     to avoid confusion
   */
  const newDispatchProps = {...dispatchProps };
  delete newDispatchProps.receiveActiveElement;


  return {
    ...stateProps,
    ...newDispatchProps,
    ...ownProps,
    setSelfAsActive: () => receiveActiveElement(id),
  }
}

export default connect(null, mDTP, mergeProps)(HabitBox);
