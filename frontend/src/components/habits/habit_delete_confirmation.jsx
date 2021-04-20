import { connect } from 'react-redux'
import { destroyHabit } from "../../actions/habit_actions";

import entityDeleteConfirmPrompt from '../modal/confirm_delete';

const mSTP = ({
  entities: {
    habits: {
      all: habits,
    }
  },
  ui: {
    modal: {
      misc: {
        habitId,
      }

    }
  },
}) => {
  const { _id: id, title } = habits[habitId] ||
     { _id: undefined, title: undefined };
  return {
    type: "habit",
    id,
    title,
  }
}

const mDTP = {
  deleteEntityCallback: destroyHabit,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  deleteEntityCallback: () =>
    dispatchProps.deleteEntityCallback(stateProps.id),
});

export default connect(
    mSTP,
    mDTP,
    mergeProps,
  )(
    entityDeleteConfirmPrompt
  );
