import LikeButton from '../likes/like_button';
import { connect } from 'react-redux';

import {
  fetchHabitLikeStatus,
  likeHabit,
  unLikeHabit,
} from '../../actions/like_actions';

const mSTP = ({entities: {habits: {all: habits} } }, {habitId} ) => ({
  liked: habits[habitId] ? habits[habitId].liked : null,
})

const mDTP = (dispatch, {habitId}) => {
  const fnObj = {
    fetchEntityLikeStatus: fetchHabitLikeStatus,
    likeEntity: likeHabit,
    unLikeEntity: unLikeHabit,
  }

  let resultObject = {};
  Object.keys(fnObj).forEach( fnName => {
    resultObject[fnName] = () => dispatch(fnObj[fnName](habitId));
  });

  return resultObject;
}

export default connect(mSTP, mDTP)(LikeButton);
