import LikeButton from '../likes/like_button';
import { connect } from 'react-redux';

import {
  fetchResourceLikeStatus,
  likeResource,
  unLikeResource,
} from '../../actions/like_actions';

const mSTP = ({ entities: { resources: { all: resources } } }, 
              { resourceId }) => ({
  liked: resources[resourceId] ? resources[resourceId].liked : null,
});

const mDTP = (dispatch, {resourceId}) => {
  const fnObj = {
    fetchEntityLikeStatus: fetchResourceLikeStatus,
    likeEntity: likeResource,
    unLikeEntity: unLikeResource,
  }

  let resultObject = {};
  Object.keys(fnObj).forEach( fnName => {
    resultObject[fnName] = () => dispatch(fnObj[fnName](resourceId));
  });

  return resultObject;
}

export default connect(mSTP, mDTP)(LikeButton);
